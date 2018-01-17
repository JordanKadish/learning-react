var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname, "src"),
    devtool: debug ? "inline-sourcemap" : false,
    entry: "./js/client.js", // taking this in
    module: {
        loaders: [
            {
                test: /\.jsx?$/,// all React js code should be loaded with the babel loader, which is a transpiler (program that converts code between languages)
                exclude: /(node_modules|bower_components)/, // do not convert node or bower stuff
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'], // the stuff we;re converting (react jsx, ES6)
                    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
                }
            }
        ]
    },
    output: {
        path: __dirname + "/src/", //output of this code goes into the current directory/source, as client.min.js
        filename: "client.min.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};
