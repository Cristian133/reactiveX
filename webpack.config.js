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
      "Content-Security-Policy": "default-src 'self'; img-src 'self' data:; connect-src 'self' https://api.github.com https://httpbin.org https://fonts.googleapis.com;",
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
