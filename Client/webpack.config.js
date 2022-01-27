const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // the output bundle won't be optimized for production but suitable for development
  mode: 'development',
  // the app entry point is /src/index.js
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
  	// the output of the webpack build will be in /dist directory
    path: path.resolve(__dirname, 'dist'),
    // the filename of the JS bundle will be bundle.js
    filename: 'bundle.js'
  },
   devServer: {
   port: 3000,
 },  // Rules of how webpack will take files, complie/bundle them for browser
  module: {
    rules: [
      {
      	// for any file with a suffix of js or jsx
        test: /\.jsx?$/,
        // ignore transpiling JavaScript from node_modules as it should be that state
        exclude: /node_modules/,
        // use the babel-loader for transpiling JavaScript to a suitable format
        loader: 'babel-loader',
      },
      {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }
    ]
  },
  // add a custom index.html as the template
  plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') })]
};



/**

// Config Option 2 (needs tested)

import { join } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export const entry = './src/index.js'
export const output = {
  path: join(__dirname, '/public'),
  filename: 'bundle.js'
}
export const devServer = {
  port: 3000,
  watchContentBase: true
}
export const module = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /nodeModules/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }
  ]
}
export const plugins = [new HtmlWebpackPlugin({ template: './src/index.html' })]

//Config option 3(edits needed)

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // Where files should be sent once they are bundled
  entry: './src/index.js',
  output: {
   path: path.join(__dirname, '/public'),
   filename: 'bundle.js'
 },
  // webpack 5 comes with devServer which loads in development mode
 devServer: {
   port: 5522,
   watchContentBase: true
 },
  // Rules of how webpack will take our files, complie & bundle them for the browser
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /nodeModules/,
       use: {
         loader: 'babel-loader'
       }
     },
     {
       test: /\.css$/,
       use: ['style-loader', 'css-loader']
     }
   ]
 },
 plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};

*/
