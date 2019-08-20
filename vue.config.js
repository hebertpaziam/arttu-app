module.exports = {
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
