export default {
  layout: "blog",
  permalink: (data) => {
    const d = data.page?.date || data.date;
    const slug = data.page?.fileSlug || data.fileSlug;
    if (!d) return `/blog/${slug}/`;
    const date = new Date(d);
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `/blog/${y}/${m}/${day}/${slug}/`;
  },
};
