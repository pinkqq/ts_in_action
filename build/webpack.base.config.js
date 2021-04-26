const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
// const { CheckerPlugin } = require("awesome-typescript-loader");
module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "app.js",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [
          {
            loader: "babel-loader",
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    // 通过一个模版帮助我们生成网站首页，并将输出文件嵌入
    new HtmlWebpackPlugin({
      template: "./src/tpl/index.html",
    }),
    // new ForkTsCheckerWebpackPlugin(),
    // new CheckerPlugin(),
  ],
};
