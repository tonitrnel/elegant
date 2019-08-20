const { resolve } = require('path')
const yaml = require('js-yaml')
const fs = require('fs')
const DIR = 'D://blog'

function load() {
  try {
    const source = fs.readFileSync(resolve(DIR, 'site.yaml'))
    return yaml.safeLoad(source.toString())
  } catch (e) {
    console.error(e.message)
    process.exit()
    return null
  }
}
module.exports = {
  dir: DIR,
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
