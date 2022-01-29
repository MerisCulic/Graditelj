const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');


module.exports = {
    entry: [
        './src/js/app.js',
        './src/styles/app.scss',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/app.js',
        assetModuleFilename: 'images/[name][ext][query]'
    },
    devtool: 'source-map',
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'src/*.html', to: '[name][ext]' }
            ],
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin()
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
    },
    devServer: {
        static: path.join(__dirname, '/src'),
        port: 9000,
        open: true
    }
}