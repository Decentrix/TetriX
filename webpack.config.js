const path = require('path');

module.exports = {
  //needed for webpack 4+
  mode: 'development',
  //where webpack is pulling files from
  entry: './client/src/index.js',
  //where webpack is outputing normal build
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: './bundle.js',
  },
  node: {
    fs: "empty"
 },
  //loaders and modules that webpack will need to read your specific files
  module: {
    rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    publicPath: '/build/',
    contentBase: path.join(__dirname, 'client/public'),
    hot: true,
    port: 8080
  }
}
console.log(__dirname);