const HtmlWebpackPlugin = require('html-webpack-plugin'); /*Use common JS*/
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path') /*Built into Node*/

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/app.js') /* Setting entry point because we renamed index.js into app.js*/
    },
    output: {
        filename: '[name].bundle.js', /*[dynamic naming]*/
        path: path.resolve(__dirname, 'dist')
    },
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
    /*
    Specify all the loaders you want webpack to go through one by one when it builds a bundle.
    Rules are evaluated from bottom to top and from right to left. The rule that you want to be run first must be specified at the bottom.
    Each rule is in their own object. Propertirs are written in RegEx.
    */
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
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|png|jpg|jpeg|webp)$/i,
                type: 'asset/resource'
            }
        ]
    }
}