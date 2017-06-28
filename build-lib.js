'use strict';

const getPath = require('path').resolve;

const copy = require('cpy');
const deleteFolders = require('del');
const fs = require('fs-extra');

const inlineResources = require('angular-inline-resources');
const ngc = require('@angular/compiler-cli/src/main').main;

const camelcase = require('camelcase');
const log = console.log;
const pkg = require('./src/lib/package.json');

const rollup = require('rollup');
const sourcemaps = require('rollup-plugin-sourcemaps');
const uglify = require('rollup-plugin-uglify');

const distFolder = 'dist';


return Promise.resolve()
  // Delete output folders
  .then(() => deleteFolders(['tmp', 'build', distFolder]))

  // Copy sources to tmp folder
  .then(() => fs.copy('src/lib', 'tmp/lib'))

  // Inline angular templates and styleUrls for compilation
  .then(() => inlineResources('tmp'))
  .then(() => log('✓ Inline angular sources'))

  // Compile to es2015
  .then(() => ngc({project: `tmp/lib/tsconfig.json`}))
  .then(exitCode => exitCode === 0 ? Promise.resolve() : Promise.reject())
  .then(() => log('✓ Compile to es2015'))

  // Compile to es5
  .then(() => ngc({project: `tmp/lib/tsconfig.es5.json`}))
  .then(exitCode => exitCode === 0 ? Promise.resolve() : Promise.reject())
  .then(() => log('✓ Compile to es5'))

  // Delete tmp
  .then(() => deleteFolders(['tmp']))

  // Copy resources
  .then(() => Promise.resolve()
    .then(() => copy('**/*.d.ts', getPath(distFolder), { cwd: getPath('build/es2015'), parents: true }))
    .then(() => copy('**/*.metadata.json', getPath(distFolder), { cwd: getPath('build/es2015'), parents: true }))
    .then(() => copy('LICENSE', getPath(distFolder), { cwd: getPath('.') }))
    .then(() => copy('README.md', getPath(distFolder), { cwd: getPath('.') }))
    .then(() => copy('package.json', getPath(distFolder), { cwd: getPath('src/lib') }))
    .then(() => console.log(`✓ Copy typings, metadata, and other resources to ${distFolder} folder`))
  )
  .then(() => {
    // Generate bundles (using rollup)
    const es5Entry = getPath(`build/es5/${pkg.name}.js`);
    const es2015Entry = getPath(`build/es2015/${pkg.name}.js`);

    const rollupBaseConfig = {
      moduleName: camelcase(pkg.name),
      sourceMap: true,
      // Add below the peer dependencies
      // of library's package.json
      globals: {
        '@angular/core': 'ng.core'
      },
      external: [
        '@angular/core'
      ],
      plugins: [
        sourcemaps()
      ]
    };

    // fesm5 module
    const fesm5Config = Object.assign({}, rollupBaseConfig, {
      entry: es5Entry,
      dest: getPath(`${distFolder}/${pkg.name}.es5.js`),
      format: 'es'
    });

    // fesm2015
    const fesm2015Config = Object.assign({}, rollupBaseConfig, {
      entry: es2015Entry,
      dest: getPath(`${distFolder}/${pkg.name}.js`),
      format: 'es'
    });

    // umd
    const umdConfig = Object.assign({}, rollupBaseConfig, {
      entry: es5Entry,
      dest: getPath(`${distFolder}/bundles/${pkg.name}.umd.js`),
      format: 'umd',
    });

    // umd minified
    const umdConfigMinified = Object.assign({}, rollupBaseConfig, {
      entry: es5Entry,
      dest: getPath(`${distFolder}/bundles/${pkg.name}.umd.min.js`),
      format: 'umd',
      plugins: rollupBaseConfig.plugins.concat([uglify({})])
    });

    const arrayConfig = [
      fesm5Config,
      fesm2015Config,
      umdConfig,
      umdConfigMinified,
    ].map(conf => rollup.rollup(conf).then(bundle => bundle.write(conf)));

    return Promise.all(arrayConfig)
      .then(() => console.log('✓ Generation of bundles'))
  })
  .catch(e => {
    console.error(e);
    console.error('\nBuild failed. Exiting process.');
    process.exit(1);
  });
