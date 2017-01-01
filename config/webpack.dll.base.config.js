const webpack = require('webpack')
const path = require('path')
const CleanPlugin = require('clean-webpack-plugin')

const {ROOT_PATH, DLL_BUILD_PATH} = require('./paths')

const libModules = ['redux', 'react', 'react-dom', 'react-redux', 'react-redux-form']

module.exports = {
    context: process.cwd(),

    entry: {
        lib: libModules
    },

    output: {
        path: DLL_BUILD_PATH,
        filename: '[name]_[chunkhash].js',
        sourceMapFilename: '[file].map',
        library: '[name]_[chunkhash]'
    },

    plugins: [
        new CleanPlugin([DLL_BUILD_PATH], {
            root: ROOT_PATH
        }),
        new webpack.DllPlugin({
            path: path.join(DLL_BUILD_PATH, '[name]-manifest.json'),
            name: '[name]_[chunkhash]'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
                'DEBUG': JSON.stringify(process.env.DEBUG)
            }
        })
    ]
}