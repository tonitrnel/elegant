const fs = require('fs')
const child_process = require('child_process')

/***
 * 更新项目下所有dependencies包至最新
 */
function main() {
  let _package
  try {
    _package = JSON.parse(fs.readFileSync('./package.json').toString('utf-8'))
  } catch (e) {
    console.error(e.message)
    process.exit()
  }
  const dependencies = _package['dependencies']
  // const devDependencies = _package['devDependencies']
  Object.keys(dependencies).forEach(dependency => {
    console.log('|-----------------------------|')
    const new_version = child_process
      .execSync(`yarn info ${dependency} version`)
      .toString()
      .replace(/(.*?)\n(.+?)\n(.*)/gs, '$2')
    const old_version = dependencies[dependency].replace(/[^0-9.]/, '')
    if (new_version === old_version) {
      console.log(`|------${dependency} is latest`)
      return
    }
    console.log(`|------Upgrade ${dependency} from ${old_version} to ${new_version}`)
    child_process.execSync(`yarn upgrade ${dependency}@${new_version}`, {
      stdio: ['ignore', 'ignore', 'pipe']
    })
    console.log(`|--------Upgrade end----------|`)
    console.log('|-----------------------------|')
  })
  // Object.keys(devDependencies).forEach(dependency => {
  //   console.log(`Upgrading ${dependency}`)
  //   child_process.execSync(`yarn upgrade ${dependency}@latest`, {
  //     stdio: ['ignore', 'ignore', 'pipe']
  //   })
  // })
}
main()
