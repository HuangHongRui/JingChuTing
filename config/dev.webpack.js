const path = require('path');
const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(paths.appSrc, "index.tsx"),
  output: {
    path: paths.appDist,
    filename: 'leo.bundle.js',
    publicPath: "/"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: ["awesome-typescript-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.sass$/,
        exclude: /node_modules/,
        use: ["style-loader", { loader: 'css-loader', options: { importLoaders: 1 } }, "sass-loader"]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(paths.appPublic, 'index.html'),
      favicon: path.resolve(paths.appPublic, "logo.ico")
    }),
  ],

  devServer: {
    contentBase: paths.appPublic,
    watchContentBase: true,
    hot: true,
    port: 9000,
  },

};