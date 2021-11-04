#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');


welcome({
  title: pkgJSON.name,
  tagLine: `Hey, nice to meet you`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,
});

console.log(`
Hi, I'm Cynthia Teeters

🎓 Adjunct Assistant Professor - Raritan Valley Community College (she/her)
🏫 I teach web development and JavaScript
🔵 twitter: https://twitter.com/cynthiateeters
🔵 github: https://github.com/cynthiateeters
🔵 website: https://cynthiateeters.com\n
`);
