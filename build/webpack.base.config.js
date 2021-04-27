const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: { app: "./src/index.tsx" },
  output: {
    filename: "[name].[chunkhash:8].js",
    // path: path.resolve(__dirname, "../dist"),
    clean: true,
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
            loader: "ts-loader",
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
  ],
  optimization: {
    // webpack4 提供了新的拆包方式
    splitChunks: {
      // 默认抽离 node_modules 打包成一个 vendor 文件
      chunks: "all",
    },
  },
};
