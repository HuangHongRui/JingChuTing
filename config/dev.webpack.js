const path = require("path");
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require("./paths");

module.exports = {
  mode: "development",
  entry: path.resolve(paths.appSrc, "index.tsx"),
  output: {
    path: paths.appDist,
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
    alias: {
      pages: path.resolve(paths.appSrc, "pages"),
      component: path.resolve(paths.appSrc, "component")
    }
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: ["awesome-typescript-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "sass-loader"
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(paths.appPublic, "index.html"),
      favicon: path.resolve(paths.appPublic, "logo.ico")
    })
  ],

  devServer: {
    contentBase: paths.appPublic,
    // 解决问题: 本地开发路由刷新 404
    historyApiFallback: true,
    watchContentBase: true,
    hot: true,
    port: 9000
  }
};
