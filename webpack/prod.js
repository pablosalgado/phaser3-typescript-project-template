const merge = require('webpack-merge');
const common = require('./common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'tutorial.js',
    publicPath: '/tutorial/',
  },
});
