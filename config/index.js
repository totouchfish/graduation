'use strict'

const path = require('path')
const devServerUrl = 'http://localhost:7300/mock/5e6f803a58c1d81f50729359';
// const devServerUrl = 'http://localhost:8080/';
// 代理
module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/positionInfo': {
        target: devServerUrl, //转发到的地址
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        ws: false, // 代理websocket
        pathRewrite: {
          '^/positionInfo': 'positionInfo', // 路径重写 pathRewrite 表示的意思是 把^/XX 替换为 /XX，
        }
      },
      '/resumeHandle': {
        target: devServerUrl, //转发到的地址
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        ws: false, // 代理websocket
        pathRewrite: {
          '^/resumeHandle': 'resumeHandle', // 路径重写 pathRewrite 表示的意思是 把^/XX 替换为 /XX，
        }
      },
      '/jobSeeker': {
        target: devServerUrl, //转发到的地址
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        ws: false, // 代理websocket
        pathRewrite: {
          '^/jobSeeker': 'jobSeeker', // 路径重写 pathRewrite 表示的意思是 把^/XX 替换为 /XX，
        }
      },
      '/login': {
        target: devServerUrl, //转发到的地址
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        ws: false, // 代理websocket
        pathRewrite: {
          '^/login': 'login', // 路径重写 pathRewrite 表示的意思是 把^/XX 替换为 /XX，
        }
      },
      '/collection': {
        target: devServerUrl, //转发到的地址
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        ws: false, // 代理websocket
        pathRewrite: {
          '^/collection': 'collection', // 路径重写 pathRewrite 表示的意思是 把^/XX 替换为 /XX，
        }
      },
      '/resume': {
        target: devServerUrl, //转发到的地址
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        ws: false, // 代理websocket
        pathRewrite: {
          '^/resume': 'resume', // 路径重写 pathRewrite 表示的意思是 把^/XX 替换为 /XX，
        }
      },
      '/recruit': {
        target: devServerUrl, //转发到的地址
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        ws: false, // 代理websocket
        pathRewrite: {
          '^/recruit': 'recruit', // 路径重写 pathRewrite 表示的意思是 把^/XX 替换为 /XX，
        }
      },
      '/post': {
        target: devServerUrl, //转发到的地址
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        ws: false, // 代理websocket
        pathRewrite: {
          '^/post': 'post', // 路径重写 pathRewrite 表示的意思是 把^/XX 替换为 /XX，
        }
      },
      '/china': {
        target: devServerUrl, //转发到的地址
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        ws: false, // 代理websocket
        pathRewrite: {
          '^/china': 'china', // 路径重写 pathRewrite 表示的意思是 把^/XX 替换为 /XX，
        }
      }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
