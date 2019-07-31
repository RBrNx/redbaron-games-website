const webpack = require('webpack');
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  chainWebpack: config => {
    // GraphQL Loader
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
      .end();
    config.module
      .rule('worker')
      .test(/\.worker\.js$/)
      .use('worker-loader')
      .loader('worker-loader')
      .tap(() => {
        return { inline: false, name: 'MarkedWorker.[hash].worker.js' };
      });
  },
  configureWebpack: {
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
  },
};
