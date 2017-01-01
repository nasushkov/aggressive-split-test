const path = require('path')

module.exports.ROOT_PATH = path.join(__dirname, '..')
module.exports.NODE_MODULES_PATH = path.join(module.exports.ROOT_PATH, 'node_modules')
module.exports.DLL_BUILD_PATH = path.join(module.exports.ROOT_PATH, 'dll')
module.exports.CONFIG_PATH = path.join(module.exports.ROOT_PATH,'config')

