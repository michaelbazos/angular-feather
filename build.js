'use strict';

const getPath = require('path').resolve;

const copy = require('cpy');
const deleteFolders = require('del');
const fs = require('fs-extra');
const merge = require('lodash.merge');

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
  .then(() => ngc(['-p', `tmp/lib/tsconfig.json`]))
  .then(exitCode => exitCode === 0 ? Promise.resolve() : Promise.reject())
  .then(() => log('✓ Compile to es2015'))

  // Compile to es5
  .then(() => ngc(['-p', `tmp/lib/tsconfig.es5.json`]))
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
    const es5Input = getPath(`build/es5/${pkg.name}.js`);
    const es2015Input = getPath(`build/es2015/${pkg.name}.js`);

    const rollupBaseConfig = {
      output: {
        name: camelcase(pkg.name),
        globals: {
          '@angular/core': 'ng.core'
        },
        sourcemap: true,
      },
      // Add below the peer dependencies
      // of library's package.json
      external: [
        '@angular/core'
      ],
      plugins: [
        sourcemaps()
      ]
    };

    // fesm5 module
    const fesm5Config = merge({}, rollupBaseConfig, {
      input: es5Input,
      output: {
        file: getPath(`${distFolder}/${pkg.name}.es5.js`),
        format: 'es',
      }
    });

    // fesm2015
    const fesm2015Config = merge({}, rollupBaseConfig, {
      input: es2015Input,
      output: {
        file: getPath(`${distFolder}/${pkg.name}.js`),
        format: 'es',
      }
    });

    // umd
    const umdConfig = merge({}, rollupBaseConfig, {
      input: es5Input,
      output: {
        file: getPath(`${distFolder}/bundles/${pkg.name}.umd.js`),
        format: 'umd',
      }
    });

    // umd minified
    const umdConfigMinified = merge({}, rollupBaseConfig, {
      input: es5Input,
      output: {
        file: getPath(`${distFolder}/bundles/${pkg.name}.umd.min.js`),
        format: 'umd',
      },
      plugins: rollupBaseConfig.plugins.concat([uglify({})])
    });

    const arrayConfig = [
      fesm5Config,
      fesm2015Config,
      umdConfig,
      umdConfigMinified,
    ].map(conf => rollup.rollup(conf).then(bundle => bundle.write(conf.output)));

    return Promise.all(arrayConfig)
      .then(() => console.log('✓ Generation of bundles'))
  })
  .catch(e => {
    console.error(e);
    console.error('\nBuild failed. Exiting process.');
    process.exit(1);
  });
