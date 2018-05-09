const path = require("path");

module.exports = {
  //needed for webpack 4+
  context: path.join(__dirname, 'client'),
  //where webpack is pulling files from
  entry: "/src/index.js",
  //where webpack is outputing normal build
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js"
  },
  //loaders and modules that webpack will need to read your specific files
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      }
    ]
  },
};
