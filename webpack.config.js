const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const uglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  //入口：可以是字符串、数组、对象，这里只有一个入口，写字符串即可
  entry:'./src/main.js',
  //出口: path:打包文件保存路径  filename:打包的文件名
  output:{
      path: path.resolve(__dirname,'dist'),
      filename: 'bundle.js',
      // publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ,'less-loader']
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'img/[name].[hash:8].[ext]'
            }
          },
          // {
          //   loader: 'file-loader',
          //   options: {}
          // }
        ]
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },

  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
    new webpack.BannerPlugin('最终版权归Chuckie所有'),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    // new uglifyJsPlugin()
  ]
}