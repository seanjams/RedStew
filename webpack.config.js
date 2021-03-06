const path = require("path");
const webpack = require("webpack");

const prodPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: true
    }
  })
];

const plugins = process.env.NODE_ENV === 'production' ? prodPlugins : []

module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname, 'components', 'entry.jsx'),
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        }
      }
    ]
  },
  devtool: 'source-map'
};
