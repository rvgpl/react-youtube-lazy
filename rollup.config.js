import babel from "rollup-plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import filesize from "rollup-plugin-filesize";
import autoprefixer from "autoprefixer";
import localResolve from "rollup-plugin-local-resolve";

import pkg from "./package.json";

const globalsList = {
  classnames: "classnames",
  react: "React",
  "react-dom": "ReactDOM",
  "prop-types": "PropTypes"
};

const config = {
  input: "src/index.js",
  output: [
    {
      file: pkg.browser,
      format: "umd",
      name: "react-youtube-lazy",
      globals: globalsList
    },
    {
      file: pkg.main,
      format: "cjs",
      name: "react-youtube-lazy",
      globals: globalsList
    },
    {
      file: pkg.module,
      format: "es",
      globals: globalsList
    }
  ],
  external: ["react", "react-dom", "classnames"],
  plugins: [
    peerDepsExternal(),
    postcss({
      minimize: true,
      plugins: [autoprefixer({ browsers: ["last 2 versions"] })]
    }),
    babel({ exclude: "node_modules/**" }),
    localResolve(),
    resolve(),
    commonjs(),
    filesize()
  ]
};

export default config;
