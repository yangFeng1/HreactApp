var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:path.join(__dirname,'src/main.js'),
    output:{
        path: __dirname,
        filename: 'bundle.js'
    },
    module:{
      rules: [
        {
          test: /\.jsx?$/, 
          use: 'babel-loader', 
          exclude: /node_modules/ //排除第三方的代码
        },
        {
          test: /\.css$/, 
          use: [
            {
              loader:'style-loader'
            },
            {
              loader:'css-loader'
            }
          ]
        },
        {
          test: /\.scss$/, 
          use: [
            {
              loader:'style-loader'
            },
            {
              loader:'css-loader'
            },
            {
              loader:'sass-loader'
            }
          ]
        },
        {
          test: /\.(jpg)$/, 
          use: [
            {
              loader:'url-loader'
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html', //在内存中生成的文件
        template: './template.html' //模板文件
      })
    ]
}