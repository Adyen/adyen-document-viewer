const { merge } = require('webpack-merge');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const PreactRefreshWebpackPlugin = require('@prefresh/webpack');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    entry: './playground/example.js',
    watchOptions: { ignored: /node_modules/, aggregateTimeout: 300, poll: 300 },
    plugins: [
        new ESLintPlugin({ extensions: ['ts', 'tsx', 'js'] }),
        new PreactRefreshWebpackPlugin(),
        new StylelintPlugin(),
        new HTMLWebpackPlugin({ template: './playground/index.html', inject: 'body' })
    ],
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        host: '0.0.0.0',
        static: path.join(__dirname, 'dist'),
        client: { logging: 'warn', overlay: false }
    }
});
