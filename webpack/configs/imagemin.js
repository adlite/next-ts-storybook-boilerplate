const svgoConfig = require('./svgo');

/**
 * @see https://github.com/itgalaxy/imagemin-webpack
 */
module.exports = {
  test: file => {
    if (/\.(svg|png|jpe?g|gif)$/i.test(file)) {
      console.log(`> Compress and optimize image "${file}"`);
      return true;
    }
    return false;
  },
  jpegtran: {
    progressive: true,
  },
  optipng: {
    optimizationLevel: 3,
  },
  pngquant: {
    strip: true,
    speed: 3,
  },
  gifsicle: {
    optimizationLevel: 2,
  },
  svgo: svgoConfig,
};
