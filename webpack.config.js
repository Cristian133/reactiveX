const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    headers: {
      "Content-Security-Policy": "default-src 'self' data: https://fonts.googleapis.com  https://fonts.gstatic.com; img-src 'self' data: https://avatars.githubusercontent.com; connect-src 'self' https://api.github.com https://httpbin.org https://fonts.googleapis.com https://reqres.in;",
    },
    static: {
      directory: path.join(__dirname, "./"),
    },
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
