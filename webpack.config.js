const path = require("path");
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["css-loader"]
            },

            // {
            //     test: /\.(svg|png|jpg|jpeg)$/i,
            //     type: 'asset/resource'
            // }
        ]
    },
    resolve: {
        extensions: [".js",".jsx"]
    },
    plugins: [
        new HtmlBundlerPlugin({
            entry: {
                index: "public/index.html", // output to dist/index.html
            },
            js: {
                filename: "js/[name].[contenthash:8].js", // output JS filename
            },
            css: {
                filename: "css/[name].[contenthash:8].css", // output CSS filename in production mode
                hot: true, // enable HMR for CSS in development mode
            },
        }),
    ],
    devServer: {
        port: 3000,
        static: "/dist",
    }
}

