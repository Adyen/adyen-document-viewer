const { LoaderOptionsPlugin } = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  entry: './src/index.tsx',
  output: {
    filename: 'adyen-document-viewer.min.js',
    library: { name: 'AdyenDocumentViewer', type: 'umd', export: 'default' },
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: { format: { comments: false } },
      }),
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new LoaderOptionsPlugin({ minimize: true }),
    new MiniCssExtractPlugin({
      filename: 'adyen-document-viewer.min.css',
      ignoreOrder: true,
    }),
  ],
});
