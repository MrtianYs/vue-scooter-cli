#!/usr/bin/env node

const { Command } = require('commander')
const pkg = require('../package.json')
const program = new Command()
const create = require('../cmd/create')

program
  .name('vue-scooter')
  .version(`vue-scooter version is ${pkg.version}`)
  .usage('<command> [options]')

program
  .option('-h, --help', 'output usage information')

program
  .command('create <app-name>')
  .description('create a new project, <app-name> is required')
  .option('--vuex', 'add vuex library')
  .action((source, destination) => {
    create(source, destination)
  })

program
  .command('dev')
  .description('run a local server for project development')
  .action((source, destination) => {

  })

program
  .command('build')
  .description('build project')
  .action((source, destination) => {
    
  })


program.parse(process.argv)


