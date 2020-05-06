/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const path = require("path");
const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CompressionPlugin = require("compression-webpack-plugin");
const paths = require("./paths");

module.exports = {
  mode: "production",
  entry: path.resolve(paths.appSrc, "index.tsx"),
  output: {
    path: paths.appBuild,
    filename: "js/[name].bundle.js",
    chunkFilename: "js/[name].bundle.js",
    publicPath: "/",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
    alias: {
      utils: path.resolve(paths.appSrc, "utils"),
      pages: path.resolve(paths.appSrc, "pages"),
      style: path.resolve(paths.appSrc, "style"),
      component: path.resolve(paths.appSrc, "component"),
    },
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: ["awesome-typescript-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 2 } },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [tailwindcss("../tailwind.config.js"), autoprefixer],
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.svg$/,
        exclude: path.resolve(paths.appSrc, "style/image"),
        issuer: {
          test: /\.ts(x)?$/,
        },
        use: ["@svgr/webpack"],
      },
      {
        test: /\.svg$/,
        issuer: {
          test: /\.ts(x)?$/,
        },
        exclude: path.resolve(paths.appSrc, "style/icon"),
        use: [
          "@svgr/webpack",
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
              name: "static/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              name: "static/[name].[ext]",
            },
          },
        ],
      },
    ],
  },

  plugins: [
    // new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin({ root: paths.appBuild }),
    new HtmlWebpackPlugin({
      template: path.resolve(paths.appPublic, "index.html"),
      favicon: path.resolve(paths.appPublic, "logo.ico"),
    }),
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
    }),
  ],
};
