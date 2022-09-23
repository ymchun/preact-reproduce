const { defineConfig } = require("@vue/cli-service");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: process.env.IS_BUILD === "1" ? "static" : "disabled",
      }),
    ],
  },
});
