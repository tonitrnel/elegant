const { resolve } = require('path')
const yaml = require('js-yaml')
const fs = require('fs')
let dir = ''
if (process.platform === 'linux') {
  dir = '/mnt/d/OneDrive/Documents/Blog'
}
if (process.platform === 'win32') {
  dir = 'D://OneDrive/Documents/Blog'
}

function load() {
  try {
    const source = fs.readFileSync(resolve(dir, 'site.yaml'))
    return yaml.safeLoad(source.toString())
  } catch (e) {
    console.error(e.message)
    process.exit()
    return null
  }
}
module.exports = {
  dir,
  site: {
    title: '',
    url: '',
    description: '',
    keywords: ''
  },
  author: {
    name: '',
    note: ''
  },
  navigate: [],
  pagination: 10,
  analytics: '',
  ignore: [],
  ...load()
}
