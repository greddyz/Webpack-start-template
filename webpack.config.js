'use strict';

let path = require('path'),
    //webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            template: './src/index.html',
            hash: true
        })
    ]
};