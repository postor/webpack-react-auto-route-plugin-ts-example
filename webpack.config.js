const { resolve, join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const AutoRoutePlugin = require('webpack-react-auto-route-plugin')

module.exports = {
  mode: "development",
  entry: "./src/boot.tsx",
  output: {
    clean: true,
    path: resolve(__dirname, "dist"),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.m?tsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react", '@babel/preset-typescript']
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
      getRoutesFile: /get-routes\.tsx/,
    })
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
};
