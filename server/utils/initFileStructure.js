/**
 * Creates necessary directories from server/config.js for server working
 */
const fs = require('fs');
const mkdirp = require('mkdirp');
const {dirsToGenerate, filesToGenerate} = require('../config');
const {resolveServerPath} = require('./helpers');

console.log('Generating initial server file structure...');

// Generate dirs
dirsToGenerate.forEach(pathname => {
  const resolvedPath = resolveServerPath(pathname);

  if (!fs.existsSync(resolvedPath)) {
    console.log(`Create directory "${resolvedPath}"`);
    mkdirp.sync(resolvedPath);
  }
});

// Generate files
filesToGenerate.forEach(file => {
  const resolvedPath = resolveServerPath(file.path);

  if (!fs.existsSync(resolvedPath)) {
    console.log(`Create file "${resolvedPath}"`);
    fs.writeFileSync(resolvedPath, file.content);
  }
});
