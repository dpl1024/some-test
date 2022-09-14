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
  .parse(process.argv);

const options = program.opts()
console.log(options);
program.outputHelp()
