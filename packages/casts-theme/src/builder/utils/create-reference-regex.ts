const defaults = {
  opening_character: '{',
  closing_character: '}',
  separator: '.',
};

export function createReferenceRegex(opts = {}) {
  const options = Object.assign({}, defaults, opts);

  return new RegExp(
    '\\' +
      options.opening_character +
      '([^' +
      options.closing_character +
      ']+)' +
      '\\' +
      options.closing_character,
    'g',
  );
}
