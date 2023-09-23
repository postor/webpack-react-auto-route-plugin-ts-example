const { resolve, join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const AutoRoutePlugin = require('webpack-react-auto-route-plugin')

module.exports = {
  mode: "development",
  entry: "./src/boot.js",
  output: {
    clean: true,
    path: resolve(__dirname, "dist"),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.ProvidePlugin({
      React: "react"
    }),
    new AutoRoutePlugin({
      root: './src/pages',
      skip: /^\$/,
      getRoutesFile: /get-routes\.js/,
    })
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true
  }
};
