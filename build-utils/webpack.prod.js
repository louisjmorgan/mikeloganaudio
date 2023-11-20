const path = require('path');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.production'),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '..', './public'),
          to: path.resolve(__dirname, '..', './dist'),
        },
      ],
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '..', './dist'),
  },
  devtool: 'source-map',
};
