#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const shell = require('shelljs');
const files = require('../lib/files.js');
const inquirer = require('../lib/inquirer.js');
const github = require('../lib/github.js');

clear();

console.log(
  chalk.yellow(
    figlet.textSync('Github CLI', { horizontalLayout: 'full' })
  )
);

const run = async () => {
  const {userName} = await inquirer.askUserName();
  const repos = await github.getRepoList(userName);
  const cloneRepo = await inquirer.askRepoList(repos);

  if(files.directoryExists(cloneRepo.name)) {
    // TODO: exist File
  }else {
    shell.exec(`git clone ${cloneRepo.url}`);
  }
};

run();
