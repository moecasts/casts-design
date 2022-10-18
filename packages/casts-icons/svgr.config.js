module.exports = {
  jsxRuntime: 'automatic',
  typescript: true,
  prettier: false,
  svgProps: {
    className: '{classes}',
    style: '{styles}',
  },
  template: require('./template/icon-template'),
  indexTemplate: require('./template/index-template'),
};
