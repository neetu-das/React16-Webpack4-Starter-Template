//  to run webpack.config.babel.js , @babel/register is required
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: path.join(__dirname, "./js/clientApp.jsx"),
  output: {
    path: path.join(__dirname, "public"),
    filename: "[name].bundle.js"
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
    new HtmlWebpackPlugin({
      title: "Custom template",
      template: path.join(__dirname, "index.html")
    })
  ],
  module: {
    rules: [
      {
        test: /\.js/,
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
  mode: "development"
};
