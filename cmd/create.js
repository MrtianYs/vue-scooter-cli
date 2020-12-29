const fs = require('fs-extra')
const inquirer = require('inquirer')
const ora = require('ora')
const toast = require('../utils/toast')
const download = require('../utils/download')
const options = require('../utils/options')
const templateHandle = require('../utils/temlpate_handle')

module.exports = async (source, cmd) => {
  const path = `${process.cwd()}/${source}`
  if(fs.existsSync(path)) {
    toast.error('The current directory already exists in the folder')
  } else {
    const spinner = ora('vue-scooter template is dnowloading...').start();
    const downloadRes = await download('https://github.com/MrtianYs/vue-scooter-template.git', source)
    spinner.stop()
    if(!downloadRes) {
      inquirer.prompt(options).then(answer => {
        templateHandle(answer, source)
      })
    }
  }
}