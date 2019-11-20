module.exports = (imports = []) => {
  return imports.map(path => `@import '${path}';`).join('');
};
