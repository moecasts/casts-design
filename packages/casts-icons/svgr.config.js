module.exports = {
  jsxRuntime: 'automatic',
  typescript: true,
  prettier: false,
  svgProps: {
    className: '{classes}',
    style: '{styles}',
    role: 'img',
  },
  template: require('./template/icon-template'),
  indexTemplate: require('./template/index-template'),
};
