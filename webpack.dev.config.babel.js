require("babel-polyfill");
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import FaviconsWebpackPlugin from "favicons-webpack-plugin";
import CleanWebpackPlugin from "clean-webpack-plugin";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import webpack from "webpack";

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, "index.html"),
  filename: "index.html",
  inject: "body"
});

const CleanPlugin = new CleanWebpackPlugin(["static"]);

const DefinePlugin = new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify("development")
  },
  API_URL: JSON.stringify("https://api.darksky.net/forecast"),
  SECRET_KEY: JSON.stringify("1af3f94f02d94fb425b5eee315915259")
});

const ExtractTextPluginCSS = new ExtractTextPlugin({
  filename: "style.[chunkhash].css",
  allChunks: true,
  ignoreOrder: true
});

const ProvidePlugin = new webpack.ProvidePlugin({
  $: "jquery",
  jQuery: "jquery"
});

const FaviconPlugin = new FaviconsWebpackPlugin({
  logo: path.resolve(__dirname, "src/assets/images/favicon.png"),
  icons: {
    android: false,
    appleIcon: false,
    appleStartup: false,
    coast: false,
    favicons: true,
    firefox: false,
    opengraph: false,
    twitter: false,
    yandex: false,
    windows: false
  }
});

const config = {
  entry: "./src/app/App.js",
  output: {
    path: path.resolve(__dirname, "static"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [["es2015", { modules: false }], "react"],
          plugins: [
            "transform-object-rest-spread",
            "transform-async-to-generator"
          ]
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]",
            "sass-loader"
          ]
        })
      },
      {
        test: /.(mp4|ogv|png|jpg|woff(2)??|eot|otf|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: "url-loader?limit=100000"
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    CleanPlugin,
    HTMLWebpackPluginConfig,
    DefinePlugin,
    ExtractTextPluginCSS,
    ProvidePlugin,
    FaviconPlugin
  ],
  devtool: "source-map"
};

module.exports = config;
