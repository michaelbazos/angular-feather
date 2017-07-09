const del = require('del');
const fs = require('fs-extra');
const uppercamelcase = require('uppercamelcase');

const iconsSrcFolder = 'node_modules/feather-icons/icons';

const iconListFile = 'LIST.md';

const rawgitBaseUrl = 'https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons';


return Promise.resolve()
  // delete previous output
  .then(() => del([iconListFile]))
  // create destination folder
  .then(() => {
    fs.appendFileSync(iconListFile, `|     | Icon  | Symbol to import | Component selector |\n`);
    fs.appendFileSync(iconListFile, `| --- | ----- | ---------------- | ------------------ |\n`);

    fs.readdirSync(iconsSrcFolder).forEach(category => {
      'use strict';

      // category begin
      fs.readdirSync(`${iconsSrcFolder}/${category}`).forEach(filename => {
        'use strict';
        const name = stripExtension(filename);
        const moduleName = `Icon${uppercamelcase(name)}`;

        const svgUrl = `${rawgitBaseUrl}/${category}/${filename}`;

        fs.appendFileSync(
          iconListFile,
          `| ![${name}](${svgUrl}) | \`${name}\` | \`${moduleName}\` | \`<i-${name}>\` |\n`
        );
      });

      // fs.appendFileSync(iconListFile, `\n`);
    });
  })
  .catch((err) => console.log(err));


function stripExtension(str) {
  return str.substr(0, str.lastIndexOf('.'));
}
