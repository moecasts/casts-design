module.exports = {
  '*.(j|t)s?(x)': ['eslint --fix'],
  '*.{css,scss,sass,less}': ['stylelint --fix'],
  '*.{md,json}': ['prettier --write'],
};
