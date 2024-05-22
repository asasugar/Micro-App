const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/child/sidebar/',
  outputDir: 'sidebar',
  productionSourceMap: false,
  devServer: {
    hot: true,
    port: 4006,
    open: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  lintOnSave: false,
  // 自定义webpack配置
  configureWebpack: {

  },
})
