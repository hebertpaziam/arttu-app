module.exports = {
  devServer: {
    proxy: {
      "/github-auth/*": {
        target: "https://github.com/login/oauth",
        secure: true,
        changeOrigin: true,
        pathRewrite: {
          "/github-auth/*": ""
        }
      },
      "/github-api/*": {
        target: "https://api.github.com",
        secure: true,
        changeOrigin: true,
        pathRewrite: {
          "/github-api/*": ""
        }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "~@/assets/style/1-settings";
          @import "~@/assets/style/2-tools";
        `
      }
    }
  }
};
