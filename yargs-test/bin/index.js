#!/usr/bin/env node

const yargs = require('yargs/yargs')
const dedent = require('dedent')
const pkg = require('../package.json')

const argv = process.argv.slice(2)

const context = {
  yargsTestVersion: pkg.version,
};

const cli = yargs(argv)

cli
  .usage("Usage: $0 <command> [options]")
  .demandCommand(1, "A command is required. Pass --help to see all available commands and options.")
  .recommendCommands()
  .strict()
  .alias("h", "help")
  .alias("v", "version")
  .wrap(cli.terminalWidth())
  .epilogue(dedent`
  When a command fails, all logs are written to lerna-debug.log in the current working directory.
  
  For more information, check out the docs at https://github.com/dpl1024/some-test
  `)
  .options({
    debug: {
      type: 'boolean',
      describe: 'Bootstrap debug mode',
      alias: 'd'
    }
  })
  .option('registry', {
    type: 'string',
    describe: 'Define global registry',
    alias: 'r'
  })
  .group(['debug'], 'Dev Options:')
  .group(['registry'], 'Extra Options:')
  .command(
    'init [name]',
    'Do init a project',
    (yargs) => {
      yargs
        .option('name', {
          type: 'string',
          describe: 'Name of the project',
          alias: 'n'
        })
    },
    (argv) => {
      console.log(argv);
    }
  )
  .command({
    command: 'list',
    aliases: ["ls", "la", "ll"],
    describe: "List local packages",
    builder: (yargs) => {
    },
    handler: (argv) => {
      console.log(argv);
    }
  })
  .parse(argv, context);