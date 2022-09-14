#!/usr/bin/env node

const pkg = require('../package.json')
const commander = require('commander');
const {program} = commander

program
  .version(pkg.version)
  .parse(process.argv)