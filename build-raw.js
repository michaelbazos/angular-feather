'use strict';

const deleteFolders = require('del');
const fs = require('fs-extra');

const inlineResources = require('angular-inline-resources');


const distFolder = 'raw';


return Promise.resolve()
  // Delete output folders
  .then(() => deleteFolders(['tmp', distFolder]))

  // Copy sources to tmp folder
  .then(() => fs.copy('src/lib', 'tmp/lib'))

  // Inline angular templates and styleUrls for compilation
  .then(() => inlineResources('tmp'))
  .then(() => console.log('✓ Inline angular sources'))

  // Copy components and index
  .then(() => fs.copy('tmp/lib/feather', `${distFolder}/feather`))
  .then(() => fs.copy('tmp/lib/index.ts', `${distFolder}/index.ts`))

  // Delete tmp
  .then(() => deleteFolders('tmp'))

  // Copy additional resources
  .then(() => Promise.resolve()
    .then(() => fs.copy('LICENSE', `${distFolder}/LICENSE`))
    .then(() => fs.copy('README.md', `${distFolder}/README.md`))
    .then(() => fs.copy('src/lib/package.json', `${distFolder}/package.json`))
    .then(() => console.log(`✓ Copy resources to ${distFolder} folder`))
  )

  .catch(e => {
    console.error(e);
    console.error('\nBuild failed. Exiting process.');
    process.exit(1);
  });
