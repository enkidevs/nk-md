const path = require('path')
const fs = require('fs')
const app = require('electron').app

exports.getStylesheet = function (filePath) {
  var stylePath = path.resolve(filePath)

  try {
    return fs.readFileSync(stylePath, 'utf-8')
  } catch (ex) {
    console.error('Cannot load style', filePath + ':', ex.code === 'ENOENT' ? 'no such file' : ex.message)
    app.exit(1)
  }
}
