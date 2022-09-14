#!/usr/bin/env node

console.log('commander-test')

const pkg = require('../package.json')
const commander = require('commander');

// const {program} = commander
const program = new commander.Command()

program
  .name(Object.keys(pkg.bin)[0])
  .usage('<command> [options]')
  .version(pkg.version)
  .option('-d, --debug', '是否开启调试模式', false)
  .option('-e, --envName <envName>', '获取环境变量名称')

const clone = program.command('clone <source> [destination]');
clone
  .description('clone a repository')
  .action((source, destination, cmdObj) => {
    console.log('do clone', source, destination)
    console.log('cmdObj > ', cmdObj);
  })
  .option('-f, --force', '是否强制克隆')
  .option('-n, --name <name>', '是否强制克隆')

const service = new commander.Command('service')
service
  .command('start [port]')
  .description('start service at the port')
  .action((port) => {
    console.log('do service start', port)
  })
service
  .command('stop')
  .description('stop service')
  .action(() => {
    console.log('stop service')
  })
program.addCommand(service)

program.parse(process.argv);


const options = program.opts()
console.log(options);
program.outputHelp()
