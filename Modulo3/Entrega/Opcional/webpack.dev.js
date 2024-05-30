import { merge } from "webpack-merge";
import Dotenv from "dotenv-webpack";
import common from "./webpack.common.js";

export default merge(common, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devtool: "eval-source-map",
  devServer: {
    devMiddleware: {
      stats: "errors-only",
    },
  },
  plugins: [
    new Dotenv({
      path: "./dev.env",
    }),
  ],
});
