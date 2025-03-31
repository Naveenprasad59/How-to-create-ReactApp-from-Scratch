const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "production",
    entry: "/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'output.js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            // {
            //     test: /\.css$/,
            //     use: ["style-loader","css-loader"]
            // },

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
       new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public/index.html")
       })
    ],
    devServer: {
        port: 3000,
        static: "/dist"
    }
}

