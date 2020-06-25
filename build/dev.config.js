const webpackMerge = require('webpack-merge')  //导入合并插件
const baseConfig = require('./base.config')   //导入基础配置

module.exports = webpackMerge(baseConfig, {   //合并
  devServer: {
    contentBase: './dist',
    inline: true
  }
})