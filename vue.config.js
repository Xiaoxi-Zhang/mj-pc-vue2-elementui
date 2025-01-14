const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 允许打包的结果，以文件方式访问（允许双击打开）
  publicPath: './',
  // 去掉map文件
  productionSourceMap: false
})
