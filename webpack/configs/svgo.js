/**
 * @see https://github.com/svg/svgo/blob/master/README.ru.md
 */
module.exports = {
  plugins: [
    {
      cleanupAttrs: true,
    },
    {
      removeDoctype: true,
    },
    {
      removeXMLProcInst: true,
    },
    {
      removeComments: true,
    },
    {
      removeMetadata: true,
    },
    {
      removeTitle: true,
    },
    {
      removeDesc: true,
    },
    {
      removeUselessDefs: true,
    },
    {
      removeEditorsNSData: true,
    },
    {
      removeEmptyAttrs: true,
    },
    {
      removeHiddenElems: true,
    },
    {
      removeEmptyText: true,
    },
    {
      removeEmptyContainers: false,
    },
    {
      removeViewBox: false,
    },
    {
      cleanupEnableBackground: false,
    },
    {
      convertStyleToAttrs: false,
    },
    {
      convertColors: true,
    },
    {
      convertPathData: true,
    },
    {
      convertTransform: false,
    },
    {
      removeUnknownsAndDefaults: false,
    },
    {
      removeNonInheritableGroupAttrs: false,
    },
    {
      removeUselessStrokeAndFill: false,
    },
    {
      removeUnusedNS: false,
    },
    {
      cleanupIDs: false,
    },
    {
      cleanupNumericValues: false,
    },
    {
      moveElemsAttrsToGroup: false,
    },
    {
      moveGroupAttrsToElems: false,
    },
    {
      collapseGroups: false,
    },
    {
      removeRasterImages: false,
    },
    {
      mergePaths: true,
    },
    {
      convertShapeToPath: true,
    },
    {
      sortAttrs: false,
    },
    {
      removeDimensions: false,
    },
    {
      removeAttrs: false,
    },
    {
      prefixIds: true,
    },
  ],
};
