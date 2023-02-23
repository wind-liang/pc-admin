const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: "http://localhost:3002",
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/pc-admin/'
    : '/'
});
