const del = require('del');
const fs = require('fs-extra');
const uppercamelcase = require('uppercamelcase');

const iconsSrcFolder = 'node_modules/feather-icons/icons';
const iconsDestFolder = 'src/lib/feather';
const indexFile = 'src/lib/index.ts';

const componentTemplate = fs.readFileSync('src/templates/component.ts.tpl', 'utf-8');
const moduleTemplate = fs.readFileSync('src/templates/module.ts.tpl', 'utf-8');

return Promise.resolve()
  // delete feather folder and index
  .then(() => del([iconsDestFolder, indexFile]))
  // create destination folder
  .then(() => fs.mkdirSync(iconsDestFolder))
  .then(() => {
    fs.readdirSync(iconsSrcFolder).forEach(category => {
      'use strict';

      fs.mkdirSync(`${iconsDestFolder}/${category}`);

      fs.readdirSync(`${iconsSrcFolder}/${category}`).forEach(filename => {
        'use strict';
        const name = stripExtension(filename);
        const componentName = `Icon${uppercamelcase(name)}Component`;
        const moduleName = `Icon${uppercamelcase(name)}`;

        let output = componentTemplate
          .replace(/__NAME__/g, name)
          .replace(/__CATEGORY__/g, category)
          .replace(/__COMPONENT_NAME__/g, componentName);

        fs.writeFileSync(`${iconsDestFolder}/${category}/${name}.component.ts`, output, 'utf-8');

        output = moduleTemplate
          .replace(/__NAME__/g, name)
          .replace(/__COMPONENT_NAME__/g, componentName)
          .replace(/__MODULE_NAME__/, moduleName);

        fs.writeFileSync(`${iconsDestFolder}/${category}/${name}.module.ts`, output, 'utf-8');

        fs.appendFileSync(
          indexFile,
          `export { ${componentName} } from './feather/${category}/${name}.component';\n` +
          `export { ${moduleName} } from './feather/${category}/${name}.module';\n`
        );
      });

      fs.appendFileSync(indexFile, `\n`);
    });
  })
  .catch((err) => console.log(err));


function stripExtension(str) {
  return str.substr(0, str.lastIndexOf('.'));
}
