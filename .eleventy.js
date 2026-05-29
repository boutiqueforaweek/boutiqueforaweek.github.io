import { EleventyHtmlBasePlugin, InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import MarkdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";

function configureMarkdown(mdLib) {
  mdLib.use(markdownItAttrs);
  return mdLib;
}

const md = configureMarkdown(new MarkdownIt());

export default function (eleventyConfig) {
  // Passthrough copy
  eleventyConfig.addPassthroughCopy({
    css: "css",
    fonts: "fonts",
    img: "img",
    js: "js",
    pdf: "pdf",
    "robots.txt": "robots.txt",
    "site.webmanifest": "site.webmanifest",
    "android-chrome-512x512.png": "android-chrome-512x512.png",
    "favicon-32x32.png": "favicon-32x32.png",
    "apple-touch-icon.png": "apple-touch-icon.png",
    "favicon-16x16.png": "favicon-16x16.png",
    CNAME: "CNAME",
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

  // Markdownify filter — renders markdown stored in JSON data (e.g. _data/sale.json).
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
    return collectionApi.getFilteredByGlob("_posts/*.md");
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
    templateFormats: ["html", "liquid", "md"],
  };
}
