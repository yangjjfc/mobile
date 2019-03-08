const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const {
  BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const CDN = [
  "https://cdn.bootcss.com/vue/2.5.22/vue.runtime.js",
  "https://cdn.bootcss.com/vue-router/3.0.2/vue-router.min.js",
  "https://cdn.bootcss.com/vuex/3.1.0/vuex.min.js",
  "http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js",
  "https://cdn.bootcss.com/echarts/4.2.1-rc1/echarts-en.common.min.js",
  "https://cdn.jsdelivr.net/npm/vant@1.6/lib/vant.min.js" //vant
]

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    // externals: {
    //   'vue': 'Vue',
    //   'vuex': 'Vuex',
    //   'vue-router': 'VueRouter',
    //   'wx-login': 'WxLogin',
    //   'echarts': 'echarts'
    // }
  },
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('~', resolve('src/utils/custom'))
      .set('@', resolve('src'));

    if (process.env.NODE_ENV === 'production') {
      // #region 启用GZip压缩
      config
        .plugin('compression')
        .use(CompressionPlugin, {
          asset: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8,
          cache: true
        }).tap(args => {});

      config
        .plugin('html')
        .tap(args => {
          return args;
        });

      config
        .plugin('analyzer')
        .use(BundleAnalyzerPlugin);
    }

  },
  devServer: {
    open: true,
    proxy: {
      '/gateway': {
        target: 'http://scs.dev.cloudyigou.com',
        changeOrigin: true
      }
    },
    overlay: {
      warnings: false,
      errors: false
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/style/common.scss";'
      }
    }
  }
};
