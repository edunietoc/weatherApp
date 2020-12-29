const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        home: path.resolve(__dirname, 'src/index.js'),
    },
    mode: 'development',
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
      },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/[name].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(tsx|jsx|js|ts)?$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: [
                      "@babel/preset-env",
                      "@babel/preset-react",
                      "@babel/preset-typescript",
                    ],
                  },
                },
              },
            {
                test: /\.(png|jpg|jpeg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 90000 //Avoid big files to be injected to JS
                    }
                }

            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        })
    ]
};

