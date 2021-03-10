const path = require( 'path' );
const merge = require('webpack-merge')
const common = require('./common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 8080,
    open: false,
    publicPath: '/tutorial/',
  }
});
