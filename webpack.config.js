const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'beta',
        libraryTarget: 'umd',
        globalObject: "typeof self !== 'undefined' ? self : this",
    },
    resolve: {
        // Add `.ts` as a resolvable extension.
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    devtool: 'source-map'
};
