const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const { merge } = require('webpack-merge')

const common = merge([
   {
      entry: { 'js': './src/index.ts', "css": './src/app.js' },

      module: {
         rules: [{
            test: /\.(s*)css$/,
            use: [
               miniCss.loader,
               'css-loader',
               'sass-loader',
            ],

         },
         {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         },
         ],

      },
      resolve: {
         extensions: ['.tsx', '.ts', '.js'],
      },
      output: {
         filename: '[name]/main.js',
      },

      plugins: [
         new miniCss({
            filename: '[name]/style.css',
         }),
         new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/index.html'), // шаблон
            filename: 'index.html', // название выходного файла
         }),
         new CopyPlugin({
            patterns: [
               { from: "*.png", to: "img/", context: "src/" },
               { from: "*.jpg", to: "img/", context: "src/" },
            ],
         }),
      ],

   },

]);


module.exports = function () {
   return common;
}



