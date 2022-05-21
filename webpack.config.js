const path = require('path');

module.exports = {
  mode: "development",
  entry: path.join(__dirname, './client/src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './client/public'),
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets:['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
           filename: 'images/[name][ext]'
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  }
};