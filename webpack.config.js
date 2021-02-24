const path = require('path') 
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './src/client/index.js',
    modules: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./dist/index.html",
            filename: "./indx.html",
        })
    ]

}
