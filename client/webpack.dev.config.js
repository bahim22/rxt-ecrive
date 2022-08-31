const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	// the output bundle mode: prod or dev; changed via scripts in pack.json
	mode: 'development',
	// the app entry point is /src/index.js
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		// the output of the webpack build will be in /dist directory
		path: path.resolve(__dirname, 'dist'),
		// the filename of the JS bundle will be bundle.js
		filename: 'bundle.js', //path.join(_dirname, 'dist')
	},
    stats:{
        errorDetails: true
    },
	devServer: {
		port: 3222,
		//watchContentBase: true,
	}, // Rules of how webpack will take files, complie/bundle them for browser
	module: {
		rules: [
			{
				// for any file with a suffix of js or jsx
				test: /\.(js|jsx)$/, //test: /\.jsx?$/
				// ignore transpiling JS from node_modules as it should be that state
				exclude: /node_modules/,
				// use the babel-loader for transpiling JavaScript to a suitable format
				use: {
					loader: 'babel-loader',
				},
			},
			/*{
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },*/ //updated
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
            {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			// template: path.resolve(__dirname, 'public', 'index.html'),
			template: './public/index.html',
			fileName: './index.html',
      favicon: './public/favicon.ico',
		}),
	], // add a custom index.html as the template updated for this proj
}

/**
/////\\\\\\\\\\\\\\\\\\\\
****** ISSUE WITH RESOLVING INDEX.HTML IN SRC || PUBLIC
//POSSIBLE fix of adding the templatecontent to plugins htmlWPPlugin

// Config Option 2 (needs tested)

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: ({ htmlWebpackPlugin }) => '<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>' + htmlWebpackPlugin.options.title + '</title></head><body><div id=\"app\"></div></body></html>',
      filename: 'index.html',
    })
  ]
};

module.exports = config;
*/
