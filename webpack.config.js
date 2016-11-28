const ngToolsWebpack = require('@ngtools/webpack');
const webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  entry: {
    main: './src/main.ts'
  },
  output: {
    path: './release',

    filename: '[name].js'
  },
  plugins: [
    new ngToolsWebpack.AotPlugin({
      tsConfigPath: './tsconfig.json'
    }),
    // new webpack.optimize.CommonsChunkPlugin({name: 'vendor.js', filename: 'vendor.js', minChunks: Infinity})
  ],
  module: {
    loaders: [
      { test: /\.scss$/, loaders: ['raw-loader', 'sass-loader'] },
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.ts$/, loader: '@ngtools/webpack' }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
};
