// vue.config.js
export default {
  configureWebpack: {
    resolve: {
      alias: {
        // eslint-disable-next-line no-undef
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
}
