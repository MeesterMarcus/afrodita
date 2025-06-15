module.exports = function(eleventyConfig) {
  // Set input and output directories
  eleventyConfig.addPassthroughCopy("assets");
  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};