module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      scss: {
        data: '@import "./src/styles/common/common.scss";'
      }
    }
  }
}
