const autoprefixer = require('autoprefixer');
const loaders = require('./loaders.js');

module.exports = {
    module: { rules: [loaders.tsx, loaders.js, loaders.scss, loaders.css] },
    resolve: { extensions: ['.tsx', '.ts', '.js', '.json'] },
    plugins: [autoprefixer]
};
