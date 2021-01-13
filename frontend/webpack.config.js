const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/ts/index.tsx",
  target: "web",
  watch: true,
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  devtool: "source-map",
  module: {
    rules: [
      { test: /\.scss$/, use: [ "style-loader", "css-loader", "sass-loader" ] },
      { test: /\.tsx?$/, loader: "babel-loader" },
      { test: /\.tsx?$/, loader: "ts-loader" },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "ts", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "./src/scss/index.css",
    }),
  ],
};
