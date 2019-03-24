const fs = require('fs')
const child_process = require('child_process')

/***
 * 更新项目下所有dependencies包至最新
 */
function main(){
    let _package
    try{
        _package = JSON.parse(fs.readFileSync('./package.json').toString('utf-8'))
    } catch (e){
        console.error(e.message)
        process.exit()
    }
    const dependencies = _package['dependencies']
    Object.keys(dependencies).forEach(dependency => {
        console.log(`Upgrading ${dependency}`)
        child_process.execSync(`yarn upgrade ${dependency}@latest`)
    })
}
main()
