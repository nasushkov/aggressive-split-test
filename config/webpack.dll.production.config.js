const webpack = require('webpack')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.dll.base.config.js')

module.exports = merge(baseConfig, {
    devtool: false,
    plugins: [
        new webpack.optimize.AggressiveSplittingPlugin({
            minSize: 30000,
            maxSize: 50000
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true,
                warnings: false
            }
        })
    ]
})
