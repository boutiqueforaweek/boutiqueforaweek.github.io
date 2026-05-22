export default {
  layout: "blog",
  permalink: (data) => {
    const d = data.page?.date || data.date;
    const slug = data.page?.fileSlug || data.fileSlug;
    if (!d) return `/blog/${slug}/`;
    const date = new Date(d);
    const y = date.getUTCFullYear();
    const m = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");
    return `/blog/${y}/${m}/${day}/${slug}/`;
  },
};
