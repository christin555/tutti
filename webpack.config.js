let path = require('path');
let CssExtract = require('mini-css-extract-plugin');

let conf = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: "[name].js",
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                     CssExtract.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',

                ]
            }
        ]
    },
    plugins: [
        new CssExtract({
            filename: "[name].css"
        })
    ]
}

module.exports = conf;
