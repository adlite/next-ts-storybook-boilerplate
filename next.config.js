const path = require('path');
// Next plugins
const withSass = require('@zeit/next-sass');
// Webpack
const CssoWebpackPlugin = require('csso-webpack-plugin').default;
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const jsonImporter = require('node-sass-json-importer');
// Internals
const {IS_DEV} = require('./webpack/utils/constants');
const getDotenvConfig = require('./webpack/utils/getDotenvConfig');
const scssImportChain = require('./webpack/utils/scssImportChain');
const imageminConfig = require('./webpack/configs/imagemin');
const svgoConfig = require('./webpack/configs/svgo');

// Next config
const config = {
  webpack(config, {isServer, defaultLoaders}) {
    // File loading
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)$/i,
      exclude: path.resolve(__dirname, 'assets', 'icons'),
      loader: 'file-loader',
      options: {
        name: () => (IS_DEV ? '[path][name].[hash].[ext]' : '[hash].[ext]'),
        publicPath: '/_next/static',
        outputPath: 'static',
        emitFile: !isServer,
      },
    });

    config.module.rules.push({
      test: /\.svg$/,
      include: path.resolve(__dirname, 'assets', 'icons'),
      use: [
        defaultLoaders.babel,
        {
          loader: 'react-svg-loader',
          options: {
            jsx: true, // true outputs JSX tags
            svgo: svgoConfig,
          },
        },
      ],
    });

    if (!IS_DEV) {
      // CSS optimizations
      config.plugins.push(new CssoWebpackPlugin());
      // Images compression and optimizations
      config.plugins.push(new ImageminWebpackPlugin(imageminConfig));
    }

    // Aliases for paths to app directories
    config.resolve.alias = {
      ...config.resolve.alias,
      assets: path.resolve(__dirname, 'assets'),
      classes: path.resolve(__dirname, 'classes'),
      components: path.resolve(__dirname, 'components'),
      hocs: path.resolve(__dirname, 'hocs'),
      sections: path.resolve(__dirname, 'sections'),
      store: path.resolve(__dirname, 'store'),
      styles: path.resolve(__dirname, 'styles'),
      utils: path.resolve(__dirname, 'utils'),
    };

    return config;
  },
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: IS_DEV ? '[local]_[hash:base64:5]' : '_[hash:base64:6]',
  },
  sassLoaderOptions: {
    importer: jsonImporter(),
    data: scssImportChain([
      'styles/config/grid.json',
      'styles/config/breakpoints.json',
      'styles/config/colors.json',
      'styles/preferences/variables',
      'styles/preferences/grid',
      'styles/preferences/mixins',
      'styles/preferences/easings',
    ]),
    includePaths: [__dirname],
  },
  env: getDotenvConfig(),
};

module.exports = withSass(config);
