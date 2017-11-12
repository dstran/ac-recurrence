const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8080,
  },
  entry: {
    'ac-recurrence': './index.js',
    'ac-recurrence.min': './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'acRecurrence'
  },
  externals: {
    angular: 'angular',
    'angular-filter': 'angular.filter',
    rrule: 'rrule'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.html$/,
        use: [
          { loader: 'ngtemplate-loader', options: 'requireAngular&module=ac-recurrence&relativeTo=/src/templates/' },
          { loader: 'html-loader' }
        ]
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'ac-recurrence.css' }),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
};
