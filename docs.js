const del = require('del');
const fs = require('fs-extra');
const uppercamelcase = require('uppercamelcase');
const execSync = require('child_process').execSync;

const iconsSrcFolder = 'node_modules/feather-icons/dist/icons';

const iconListFile = 'LIST.md';

const commitNumber = execSync('git rev-parse HEAD').toString().trim();

const rawgitBaseUrl = `https://cdn.rawgit.com/michaelbazos/angular-feather/${commitNumber}/docs/icons`;


return Promise.resolve()
  // delete previous output
  .then(() => del([iconListFile]))
  // create destination folder
  .then(() => {
    fs.appendFileSync(iconListFile, `|     | Icon  | Symbol to import | Component selector |\n`);
    fs.appendFileSync(iconListFile, `| --- | ----- | ---------------- | ------------------ |\n`);

      fs.readdirSync(`${iconsSrcFolder}`).forEach(filename => {
        'use strict';
        const name = stripExtension(filename);
        const moduleName = `Icon${uppercamelcase(name)}`;

        const svgUrl = `${rawgitBaseUrl}/${filename}`;

        fs.appendFileSync(
          iconListFile,
          `| ![${name}](${svgUrl}) | \`${name}\` | \`${moduleName}\` | \`<i-${name}>\` |\n`
        );
      });

  })
  .catch((err) => console.log(err));


function stripExtension(str) {
  return str.substr(0, str.lastIndexOf('.'));
}
