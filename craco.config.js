const path = require("path");
const webpack = require("webpack");
const { addAfterLoader, loaderByName } = require("@craco/craco");

module.exports = {
  // webpack 配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      "@": path.resolve(__dirname, "src"),
    },
    configure(webpackConfig) {
      addAfterLoader(webpackConfig, loaderByName("babel-loader"), {
        test: /\.mdx?$/,
        loader: require.resolve("@mdx-js/loader"),
      });
      return webpackConfig;
    },
  },
};
