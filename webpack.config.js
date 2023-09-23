const { resolve, join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/boot.js",
  output: {
    clean: true,
    path: resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components).*(?<!shack-get-routes\.(\w+))$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /shack-get-routes\.js$/,
        use: {
          loader: "@shack-js/auto-routes-loader",
          options: {
            folder: join("src", "pages")
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.ProvidePlugin({
      React: "react"
    })
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true
  }
};
