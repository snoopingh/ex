const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: 'lotto-setting',
    mode: 'development',
    devtool: 'eval', // hidden-source-map
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: ['./client']
    },

    module: {
        rules: [{
            test: /\.jsx/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: [
                    'react-refresh/babel'
                ]
            }
        }]
    },
    plugins: [
        new RefreshWebpackPlugin()
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/'
    },
    
    devServer: {
        publicPath: '/dist/',
        hot: true
    }
};