export default function (eleventyConfig) {
  // Стили копируются как есть
  eleventyConfig.addPassthroughCopy("src/css");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
}
