const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
      port: 8084,
    },
    plugins:[
      new ModuleFederationPlugin({
        name: 'customerProfile',
        filename: 'remoteEntry.js',
        exposes: {
          './CustomerProfileIndex': './src/index',
        },
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html'
      })
    ],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    }
  };