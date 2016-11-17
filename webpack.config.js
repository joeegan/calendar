module.exports = {
  entry: ['babel-polyfill', './app.js'],
  output: {
    filename: 'app.dist.js',
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}
