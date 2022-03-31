const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const htmlWebpackPluginConfig = require("./htmlWebpackPlugin.config")

module.exports = {
    entry: ["./src/index.js"],

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js',
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(js)$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
        ]
    },

    plugins: [
        ...htmlWebpackPluginConfig,

        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ]
}