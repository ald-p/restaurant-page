const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body'
    })
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer')
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  }
};