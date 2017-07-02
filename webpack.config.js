const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            'es2015',
            'stage-2',
            'react'
          ]
        }
      },

      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        }),
        exclude: [
          /node_modules/
        ]
      },

      { test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
}
