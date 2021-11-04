#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');

const log = console.log;
const twitter = chalk.hex(`1da1f2`).bgWhite.bold.inverse;
const github = chalk.hex(`6cc644`).bgWhite.bold.inverse;
const website = chalk.hex(`c9510c`).bgWhite.bold.inverse;

welcome({
  title: ` Cynthia Teeters `,
  tagLine: `Hey, nice to meet you`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#fcffa4`,
  color: `white`,
  bold: true,
  clear: true,
});

console.log(`${chalk.italic(`🎓 Adjunct Assistant Professor - Raritan Valley Community College (she/her)
🏫 I teach web development and JavaScript`)}

${twitter(` Twitter `)} https://twitter.com/cynthiateeters
${github(` Github  `)} https://github.com/cynthiateeters
${website(` Website `)} https://cynthiateeters.com\n
`);
