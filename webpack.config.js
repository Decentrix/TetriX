const path = require('path');

module.exports = {
  //needed for webpack 4+
  mode: 'development',
  //where webpack is pulling files from
  entry: './src/Main',
  //where webpack is outputing normal build
  output: {
    path: path.resolve(__dirname, './bundle'),
    filename: './bundle',
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
      }
    //   {
    //     test: /\.css$/,
    //     use: [{
    //         loader: 'style-loader'
    //       },
    //       {
    //         loader: 'css-loader'
    //       }
    //     ]
    //   }
    ]
  },
  devServer: {
    publicPath: "/build/",
    hot: true,
    port: 8080
  }
}