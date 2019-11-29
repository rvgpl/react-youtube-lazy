const { createConfig, match, babel, postcss } = require("webpack-blocks");
const autoprefixer = require("autoprefixer");

module.exports = {
  components: "src/**/[A-Z]*.js",
  defaultExample: true,
  title: "React Youtube Lazy",
  webpackConfig: createConfig([
    babel(),
    match(
      ["*.css", "*.scss", "!*node_modules*"],
      [
        postcss({
          plugins: [autoprefixer({ browsers: ["last 2 versions"] })]
        })
      ]
    )
  ])
};
