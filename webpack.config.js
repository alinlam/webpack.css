var path = require("path");
var webpack = require('webpack');

module.exports = {
    context: path.resolve("js"),
    entry: {
        about: './about_page.js',
        contact: './contact_page.js',
        home: './home_page.js'
    },
    output: {        
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/',
        filename: "[name].js"
    },

    devServer: {
        contentBase: 'public'
    },

    module:{
        rules:[            
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"                        
                    }
                ]                
            }            
        ],
    },
    resolve:{
        extensions: ['.js', '.es6']
    },
    optimization:{
        splitChunks:{
            cacheGroups:{
                commons:{
                    name: 'shared',
                    chunks: 'initial',
                    minChunks: 2
                }
            }
        }
    }
}