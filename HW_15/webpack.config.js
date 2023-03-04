const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, './src/main.js')
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js'
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/main.html'
    })],
    module: {
        rules: [{
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },

            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env']
                        ]
                    }
                }
            }
        ],
    }
}