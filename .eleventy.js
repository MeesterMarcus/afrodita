module.exports = function(eleventyConfig) {
  // Set input and output directories
  eleventyConfig.addPassthroughCopy("assets");

  // Explicitly set Nunjucks as the template engine for HTML files
  eleventyConfig.htmlTemplateEngine = "njk";

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    }
  };
};