const del = require('del');
const fs = require('fs-extra');
const uppercamelcase = require('uppercamelcase');

const iconsSrcFolder = 'node_modules/feather-icons/dist/icons';

const iconListFile = 'LIST.md';

const version = require('./package.json').dependencies['feather-icons'];

// const rawgitUrl = `https://cdn.rawgit.com/feathericons/feather/v${version}/icons`;
const unpkgUrl = `https://unpkg.com/feather-icons@${version}/dist/icons`


return Promise.resolve()
  // delete previous output
  .then(() => del([iconListFile]))
  // create destination folder
  .then(() => {
    fs.appendFileSync(iconListFile, `|     | Symbol to import | HTML template      |\n`);
    fs.appendFileSync(iconListFile, `| --- | ---------------- | ------------------ |\n`);

      fs.readdirSync(`${iconsSrcFolder}`).forEach(filename => {
        'use strict';
        const name = stripExtension(filename);
        const svgUrl = `${unpkgUrl}/${filename}`;

        fs.appendFileSync(
          iconListFile,
          `| ![${name}](${svgUrl}) | \`${uppercamelcase(name)}\` | \`<i-feather name="${name}"></i-feather>\` |\n`
        );
      });

  })
  .catch((err) => console.log(err));


function stripExtension(str) {
  return str.substr(0, str.lastIndexOf('.'));
}
