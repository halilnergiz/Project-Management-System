const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js',
    },
    devServer: {
        historyApiFallback: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin()],
};