const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProd = process.env.NODE_ENV === 'production';

exports.tsx = {
    test: /\.(ts|tsx)$/,
    use: 'ts-loader',
    exclude: /node_modules/
};

exports.js = {
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
};

exports.scss = {
    test: /\.scss$/,
    use: [
        isProd ? MiniCssExtractPlugin.loader : 'style-loader',
        { loader: 'css-loader', options: { importLoaders: 1 } },
        { loader: 'sass-loader', options: { implementation: require('sass') } }
    ].filter(Boolean)
};

exports.css = {
    test: /\.css$/,
    use: 'css-loader'
};
