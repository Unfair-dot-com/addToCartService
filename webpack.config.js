const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: path.resolve(__dirname, 'client'),
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)$/,
        use: {
          loader: "file-loader"
        }
      }
    ]
  }
}