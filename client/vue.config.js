const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/GunjalShubham2.github.io/',
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
        },
      },
    },
  },
})