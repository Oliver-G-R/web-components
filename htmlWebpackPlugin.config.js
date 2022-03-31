const HtmlWebpackPlugin = require('html-webpack-plugin')

const pages = [
    {
        template: './src/public/index.html',
        filename: 'index.html'
    },
    {
        template: './src/pages/Contacto.html',
        filename: 'pages/Contacto.html'
    }
]

const pluginPages = pages.map(e => {
    return new HtmlWebpackPlugin(e)
})


module.exports = pluginPages