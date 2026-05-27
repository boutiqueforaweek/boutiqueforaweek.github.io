import { EleventyHtmlBasePlugin, InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import MarkdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";
import markdownItAnchor from "markdown-it-anchor";
import yaml from "js-yaml";

function configureMarkdown(mdLib) {
  mdLib.use(markdownItAttrs);
  mdLib.use(markdownItAnchor, {
    level: [2, 3, 4],
    tabIndex: false,
    slugify: (s) =>
      String(s)
        .toLowerCase()
        .replace(/<[^>]+>/g, "")
        .replace(/&[^;]+;/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-"),
  });
  // Kramdown / Jekyll behavior: do not HTML-escape " in text content
  const baseText =
    mdLib.renderer.rules.text ||
    ((tokens, idx) => mdLib.utils.escapeHtml(tokens[idx].content));
  mdLib.renderer.rules.text = (tokens, idx, options, env, self) =>
    baseText(tokens, idx, options, env, self).replace(/&quot;/g, '"');
  return mdLib;
}

const md = configureMarkdown(new MarkdownIt());

export default function (eleventyConfig) {
  eleventyConfig.addDataExtension("yml,yaml", (contents) => yaml.load(contents));

  // Passthrough copy
  eleventyConfig.addPassthroughCopy({
    css: "css",
    fonts: "fonts",
    img: "img",
    js: "js",
    pdf: "pdf",
  });
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("site.webmanifest");
  eleventyConfig.addPassthroughCopy("android-chrome-512x512.png");
  eleventyConfig.addPassthroughCopy("favicon-32x32.png");
  eleventyConfig.addPassthroughCopy("apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("favicon-16x16.png");
  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

  eleventyConfig.addGlobalData("site_title", "Boutique for a Week");

  eleventyConfig.setIncludesDirectory("_includes");
  eleventyConfig.setLayoutsDirectory("_layouts");

  // Configure the Eleventy markdown library to match the standalone instance.
  // Enables kramdown-style attribute lists ({.img-fluid width="480"}), heading
  // anchor IDs (Kramdown / Jekyll parity), and skips HTML-escaping of straight
  // double quotes in body text.
  eleventyConfig.amendLibrary("md", configureMarkdown);

  // Use Liquid for all templates
  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    strictFilters: false,
  });
  eleventyConfig.setLiquidParameterParsing("builtin");
  eleventyConfig.setTemplateFormats(["html", "md", "liquid"]);

  // Markdownify filter — renders markdown stored in YAML data (e.g. _data/sale.yml).
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

  // Cross-links between content files use bare input paths
  // (e.g. `[text](pages/X.md)` or `[text](_posts/Y.md)`); the
  // InputPathToUrlTransformPlugin added above rewrites them to output URLs.

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
