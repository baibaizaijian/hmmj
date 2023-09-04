const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 指定打包后的项目部署在服务器的什么路径，./表示所有资源使用的相对路径，可以部署在任何路径
  publicPath: './',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {

            blue: '#FA6D1D'

          }
        }
      }
    }
  }
})
