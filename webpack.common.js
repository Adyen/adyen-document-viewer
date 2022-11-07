const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProd = process.env.NODE_ENV === 'production';
const autoprefixer = require('autoprefixer');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        cacheCompression: false,
                        cacheDirectory: true,
                        plugins: [!isProd && '@prefresh/babel-plugin'].filter(Boolean)
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    { loader: 'sass-loader', options: { implementation: require('sass') } }
                ].filter(Boolean)
            },
            {
                test: /\.css$/,
                use: 'css-loader'
            }
        ]
    },
    resolve: { extensions: ['.tsx', '.ts', '.js', '.json'] },
    plugins: [autoprefixer]
};
