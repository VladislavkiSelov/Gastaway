
const path = require('path');
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './js/script.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: "[name][ext]",
        publicPath: ''
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './pages/index.html',
            // minify: {
            //   collapseWhitespace: true
            // }
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css',
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'img'),
                    to: path.resolve(__dirname, 'dist/img'),
                    noErrorOnMissing: true
                },
            ],
        })
    ],
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    // {
                    //   loader: MiniCssExtractPlugin.loader,
                    // },
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => [
                                    autoprefixer
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg)$/i,
                type: 'asset/resource',
            }
        ]
    }
};