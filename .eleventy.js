import { EleventyHtmlBasePlugin, InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import MarkdownIt from "markdown-it";
import yaml from "js-yaml";

const md = new MarkdownIt();

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

  // Use Liquid for all templates
  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    strictFilters: false,
  });
  eleventyConfig.setLiquidParameterParsing("builtin");
  eleventyConfig.setTemplateFormats(["html", "md", "liquid"]);

  // Ordinal filter (from Jekyll ordinal.rb) - formats date like "Wednesday, April 15th"
  eleventyConfig.addFilter("ordinal", (date) => {
    if (!date) return "";
    const d = date instanceof Date ? date : new Date(date);
    const day = d.getDate();
    let suffix = "th";
    if (day % 10 === 1 && day !== 11) suffix = "st";
    else if (day % 10 === 2 && day !== 12) suffix = "nd";
    else if (day % 10 === 3 && day !== 13) suffix = "rd";
    const options = { weekday: "long", month: "long", day: "numeric" };
    return d.toLocaleDateString("en-US", options) + suffix;
  });

  // Markdownify filter (Jekyll compatibility)
  eleventyConfig.addFilter("markdownify", (str) => {
    if (!str) return "";
    return md.render(String(str));
  });

  // Truncate filter for excerpts
  eleventyConfig.addFilter("truncate", (str, length = 150) => {
    if (!str) return "";
    const s = String(str);
    return s.length <= length ? s : s.slice(0, length) + "...";
  });

  // Plus filter for Liquid (e.g. pagination.pageNumber | plus: 1)
  eleventyConfig.addFilter("plus", (value, addend) => (Number(value) || 0) + (Number(addend) || 0));

  // Strip HTML tags
  eleventyConfig.addFilter("strip_html", (str) => {
    if (!str) return "";
    return String(str).replace(/<[^>]*>/g, "");
  });

  // date_to_xmlschema filter (Jekyll compatibility)
  eleventyConfig.addFilter("date_to_xmlschema", (date) => {
    if (!date) return "";
    const d = date instanceof Date ? date : new Date(date);
    return d.toISOString();
  });

  // post_url shortcode - Jekyll {% post_url YYYY-MM-DD-slug %} compatibility
  eleventyConfig.addShortcode("post_url", function (...args) {
    const slug = String(args && args[0] !== undefined ? args[0] : "").trim();
    if (!slug) return "#";
    const posts = this?.ctx?.collections?.posts ?? [];
    const match = posts.find(
      (p) =>
        p.fileSlug === slug ||
        (p.inputPath || "").includes(slug) ||
        (p.inputPath || "").endsWith(slug + ".md")
    );
    return match ? match.url || `/blog/${slug}/` : `/blog/${slug}/`;
  });

  // Link shortcode - Jekyll {% link path %} compatibility (uses collections to resolve URL)
  eleventyConfig.addShortcode("link", function (...args) {
    const path = args && args[0] !== undefined ? args[0] : "";
    const p = String(path || "").trim();
    if (!p) return "#";
    const all = this?.ctx?.collections?.all ?? [];
    const norm = (s) => String(s || "").replace(/^\.\//, "").replace(/\\/g, "/");
    const target = norm(p);
    const match = all.find(
      (page) =>
        norm(page.inputPath || "") === target ||
        (page.inputPath || "").endsWith(p) ||
        (page.inputPath || "").includes(p)
    );
    return match ? match.url || `/${p}` : `/${p}`;
  });

  // Posts collection (chronological, reverse for blog)
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("_posts/*.md").reverse();
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
