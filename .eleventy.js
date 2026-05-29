import { EleventyHtmlBasePlugin, InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import MarkdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";
import { minify } from "html-minifier-terser";

function configureMarkdown(mdLib) {
  mdLib.use(markdownItAttrs);
  return mdLib;
}

const md = configureMarkdown(new MarkdownIt());

export default function (eleventyConfig) {
  // Passthrough copy. Input paths are relative to the project root (NOT the
  // Eleventy input dir), so they keep the `src/` prefix; output paths are
  // relative to the output dir and stay at the site root.
  eleventyConfig.addPassthroughCopy({
    "src/css": "css",
    "src/fonts": "fonts",
    "src/js": "js",
    "src/pdf": "pdf",
    "src/robots.txt": "robots.txt",
    "src/site.webmanifest": "site.webmanifest",
    "src/android-chrome-512x512.png": "android-chrome-512x512.png",
    "src/favicon-32x32.png": "favicon-32x32.png",
    "src/apple-touch-icon.png": "apple-touch-icon.png",
    "src/favicon-16x16.png": "favicon-16x16.png",
    "src/CNAME": "CNAME",
  });

  // Image passthrough: eleventyImageTransformPlugin (below) reads originals
  // straight from src/img and writes optimized variants to /img/optimized/, so
  // content <img> images do NOT need their originals copied. We only ship:
  //   - root-level src/img files: CSS backgrounds, the logo sprite, favicons,
  //     and page photos (a single `*` glob skips the heavy blog/ subdir);
  //   - the linked PDF in blog/ (referenced as a download, not an <img>).
  // This drops the ~56 MB of unoptimized blog rasters from the build.
  eleventyConfig.addPassthroughCopy("src/img/*");
  eleventyConfig.addPassthroughCopy("src/img/blog/*.pdf");
  // Lightbox originals: a handful of blog images are wrapped in a link to the
  // full-size file (`[![thumb](x.jpg)](x.jpg)`). The plugin rewrites the inner
  // <img> to /img/optimized/ but leaves the <a href> pointing at the original,
  // so those few originals must still ship. CI's lychee link check flags any new
  // lightbox link whose original isn't copied here.
  eleventyConfig.addPassthroughCopy({
    "src/img/blog/14289926_10153692379550836_4218995251695004065_o.jpg":
      "img/blog/14289926_10153692379550836_4218995251695004065_o.jpg",
    "src/img/blog/IMG_8263.jpg": "img/blog/IMG_8263.jpg",
    "src/img/blog/crocodile-ladybug.jpg": "img/blog/crocodile-ladybug.jpg",
    "src/img/blog/unnamed.jpg": "img/blog/unnamed.jpg",
  });

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    extensions: "html",
    // WebP only — universal browser support (~97%+) and the source images are
    // already mostly WebP. A second "auto" fallback format would roughly double
    // output for no practical compatibility gain.
    formats: ["webp"],
    // Capped widths, no "auto": the content column is ~720px (1200 covers 2x
    // retina), so there's no reason to emit the full 4000px source. eleventy-img
    // never upscales, so smaller sources (icons) stay a single intrinsic-width file.
    widths: [400, 800, 1200],
    defaultAttributes: {
      loading: "lazy",
      decoding: "async",
      sizes: "(max-width: 768px) 100vw, 720px",
    },
    urlPath: "/img/optimized/",
    outputDir: "_site/img/optimized/",
  });

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  // Cross-links between content files use bare input paths
  // (e.g. `[text](pages/X.md)` or `[text](_posts/Y.md)`);
  // InputPathToUrlTransformPlugin rewrites them to output URLs.
  eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Flatten a nav tree node's descendants into a single ordered list — used by
  // the header dropdown to render every descendant of e.g. "Consignors" as a
  // flat menu, while the sidebar walks the same tree as nested groups.
  eleventyConfig.addFilter("flatNavDescendants", function (node) {
    const out = [];
    function walk(children) {
      for (const c of children || []) {
        out.push(c);
        if (c.children && c.children.length) walk(c.children);
      }
    }
    walk(node?.children);
    return out;
  });

  // Find the top-level nav node whose tree contains the given URL — used by the
  // sidebar in _layouts/default.html to pick the section for the current page.
  eleventyConfig.addFilter("topLevelNavFor", function (nav, url) {
    function contains(node) {
      if (node.url === url) return true;
      for (const c of node.children || []) if (contains(c)) return true;
      return false;
    }
    for (const top of nav || []) if (contains(top)) return top;
    return null;
  });

  // Match the Eleventy markdown library to the standalone instance used by
  // `markdownify`. Enables kramdown-style attribute lists
  // (`{.img-fluid width="480"}`, `{:target='_blank'}`).
  eleventyConfig.amendLibrary("md", configureMarkdown);

  // Use Liquid for all templates
  eleventyConfig.setLiquidOptions({ dynamicPartials: false });

  // Markdownify filter — renders markdown emitted by the sale-stage includes
  // (_includes/sale/*) and other inline markdown (e.g. our-sponsors card text).
  // No Liquid built-in equivalent.
  eleventyConfig.addFilter("markdownify", (str) => {
    if (!str) return "";
    return md.render(String(str));
  });

  // date_to_xmlschema filter (Jekyll compatibility)
  eleventyConfig.addFilter("date_to_xmlschema", (date) => {
    if (!date) return "";
    const d = date instanceof Date ? date : new Date(date);
    return d.toISOString();
  });

  // Posts collection — chronological (oldest first). The blog page paginates
  // with `reverse: true` so visitors see newest first.
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/_posts/*.md");
  });

  // Minify HTML output on production builds only (skip serve/watch so dev stays
  // readable and reloads fast). collapseWhitespace is safe here — there are no
  // <pre>/<textarea> blocks; JSON-LD (application/ld+json) is left verbatim since
  // minifyJS only targets JS-type scripts.
  eleventyConfig.addTransform("htmlmin", async function (content) {
    if (
      process.env.ELEVENTY_RUN_MODE === "build" &&
      (this.page.outputPath || "").endsWith(".html")
    ) {
      return minify(content, {
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true,
        removeRedundantAttributes: true,
        minifyCSS: true,
        minifyJS: true,
      });
    }
    return content;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
    templateFormats: ["html", "liquid", "md"],
  };
}
