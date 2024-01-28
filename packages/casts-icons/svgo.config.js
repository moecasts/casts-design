module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
    'removeDimensions',
    {
      name: 'removeAttrs',
      params: {
        attrs: '*:(fill):(?!none).*',
      },
    },
  ],
};
