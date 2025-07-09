const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { runtime } = require("webpack");

module.exports = {
  mode: "development",
  devtool: "source-map",

  resolve: {
    extensions: [".js", ".jsx"], // ✅ jsx 처리 추가!
  },
  // 시작점
  entry: path.resolve(__dirname, "src/index.jsx"),

  // 웹팩 작업을 통해 생성된 결과물
  output: {
    filename: "[name].[contenthash].js", // 해시 적용
    path: path.resolve(__dirname, "dist"),
    clean: true, // 기존 dist 내 파일 자동 삭제
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 3000,
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/i, // .sass 또는 .scss 파일에 적용
        use: [
          "style-loader", // 3. 변환된 CSS를 <style> 태그로 삽입
          "css-loader", // 2. CSS를 JS 모듈로 변환
        ],
      },
      {
        test: /\.(js|jsx)$/, // .js 파일에만 적용
        exclude: /node_modules/, // node_modules 제외
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
            ], // ES6+ → ES5 변환
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
  ],
};
