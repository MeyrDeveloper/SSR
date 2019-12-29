const webpack = require('webpack')
const path = require('path')

process.noDeprecation = true

module.exports = env => {

    console.log('ENVIRONMENT !!')
    console.log(env.MODE_LOCAL)
    console.log(env.MODE_PROD)
    console.log('environment finish')
    

    return {
        entry: "./index-client.js",
        output: {
            path: path.join(__dirname, 'assets'),
            filename: "bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules)/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            ]
        },
        mode: 'development'
    }
}