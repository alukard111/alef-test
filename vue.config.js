module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/style/_var.scss";`
      }
    }
  }
};