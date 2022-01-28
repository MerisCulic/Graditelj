const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/app.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    devServer: {
        static: './dist',
        port: 9000,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Gradbeno podjetje Graditelj"
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                          postcssOptions: {
                            plugins: [
                              ["postcss-preset-env"],
                            ],
                          },
                        },
                    },
                    'sass-loader',
                ]
            },
            {
                test: /\.(gif|png|jpg|jpeg|webp)$/i,
                type: 'asset/resource'
            }
        ]
    }
}