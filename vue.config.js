const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: "http://localhost:3002",
  },
  rules: [
    {
      test: /\.less$/i,
      use: [
        // compiles Less to CSS
        "style-loader",
        "css-loader",
        "less-loader",
      ],
    },
  ],
});
