
# Additional WebPack configs and devDep

npx webpack-cli init (create WP config file)

```js
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
  entry: './src/index.tsx',
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
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
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
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: ({ htmlWebpackPlugin }) => '<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>' + htmlWebpackPlugin.options.title + '</title></head><body><div id=\"app\"></div></body></html>',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    })
  ],
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  }
};

module.exports = config;

```

Dependencies added:

- MiniCssExtractPlugin()
- CleanWebpackPlugin()
- BundleAnalyzerPlugin()
- ts loader
- url loader
- file loader

devDep
"file-loader": "^6.2.0", //svg
"url-loader": "^4.1.1" //png

D. `WebPack`

```bash
npm install --save-dev webpack webpack-cli @babel/preset-react babel-loader @babel/core @babel/preset-env @hot-loader/react-dom webpack-dev-server css-loader style-loader html-webpack-plugin postcss-loader autoprefixer jest babel-jest css-loader style-loader file-loader url-loader lodash-webpack-plugin prettier

npm install react react-dom react-hot-loader bootstrap jquery popper.js tailwindcss lodash
```

```bash
  npm install webpack webpack-cli webpack-dev-server --save-dev
  npm install webpack webpack-cli --save-dev
```

```js
const path = require('path')
module.exports = {
entry: './src/app.js',
output: {
  path: path.join(_name, 'public'),
  filename: 'bundle.js',
},}
```

- webpack _Module bundler_ to convert code into prod ready site
- Webpack CLI
- webpack-plugin-server //dev server via local
- npx webpack --config webpack.config.js //test config file
- html-webpack-plugin _pre-gen basic html doc or make your own_

Other devDep **Webpack plugins**

- _Bundle_ info "webpack-bundle-analyzer": "^4.5.0"
- _Nano_ webpack-nano
- _Mini-css_ "mini-css-extract-plugin": "^2.5.3" // minify css //\\
- _Clean_ webpack "clean-webpack-plugin": "^4.0.0"
  - removes contents of output dir before building (script: "clean": "rm dist/bundle.js")

> _Add_ to plugins array in WP config file
