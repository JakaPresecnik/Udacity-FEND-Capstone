const path = require ('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './website/app.js',
  module: {
    rules: [{
      test:'/\.js$/',
      exclude: /node_modules/,
      loader:'babel-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './website/index.html',
      filename:'./index.html'
    })
  ]
}
