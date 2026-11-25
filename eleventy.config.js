export default function (eleventyConfig) {
  // Styles are copied as is
  eleventyConfig.addPassthroughCopy("src/css");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
}
