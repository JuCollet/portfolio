const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
 entry : {
     filename : './js/index.js'
 },
 output : {
     filename : 'bundle.[chunkhash].js',
     path : path.resolve(__dirname, 'dist')
 },
 module : {
    rules : [
        {
            use : 'babel-loader',
            test : /\.js$/,
            exclude : __dirname + 'node_modules',
        }, {
            loader : ExtractTextPlugin.extract({
                loader: 'css-loader!postcss-loader!less-loader'
            }),
            test : /\.less$/,
        }, {
            loader : ExtractTextPlugin.extract({
                loader: 'css-loader'
            }),
            test : /\.css$/,
        }, {
            test : /\.(png|jpeg|jpg|gif|svg|mp4)$/,
            use : [
                {
                    loader : "url-loader",
                    options : { limit : 100, name : "./img/[name].[ext]"}
                },
                "image-webpack-loader"
            ]
        }
    ]
    },
    plugins: [
        new ExtractTextPlugin('styles/styles.css'),
        new htmlWebpackPlugin({
            title: 'Julien Collet',
            template: 'js/index.ejs',
            files : {
                css : ['styles/styles.css', ]
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
        })
    ]
};