const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");

const config = {
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:8081",
    "webpack/hot/only-dev-server",
    // "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000",
    // "webpack-hot-middleware/client?reload=true",
    path.join(__dirname, "./js/ClientApp.jsx")
  ],
  output: {
    path: path.join(__dirname, "dist/assets/"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    publicPath: "/assets/"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedChunksPlugin(),
    new HtmlWebpackPlugin({
      filename: "../index.html",
      template: path.join(__dirname, "template.html"),
      templateParameters: {
        body: "<%= body %>"
      },
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin()
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  },
  devtool: "cheap-eval-source-map",
  mode: "development",
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "/dist/"),
    historyApiFallback: true,
    inline: true,
    port: 8081
  }
};

if (process.env.NODE_ENV === "production") {
  config.entry = path.join(__dirname, "./js/ClientApp.jsx");
  config.devtool = false;
  (config.mode = "production"),
    (config.plugins = [
      new HtmlWebpackPlugin({
        filename: "../index.html",
        template: path.join(__dirname, "template.html"),
        templateParameters: {
          body: "<%= body %>"
        },
        alwaysWriteToDisk: true
      }),
      new HtmlWebpackHarddiskPlugin()
    ]);
}

module.exports = config;
