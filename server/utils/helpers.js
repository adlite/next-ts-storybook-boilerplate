const path = require('path');

const resolveServerPath = (pathname = '') => {
  return path.resolve(`${process.cwd()}/server/${pathname}`);
};

module.exports = {resolveServerPath};
