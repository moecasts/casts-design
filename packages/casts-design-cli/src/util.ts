// @ts-nocheck
module.getPrompts = (options) => {
  return Object.entries(options).map(
    ([name, { choices, default: _default, message, type }]) => ({
      choices,
      default: _default,
      message,
      name,
      type,
    }),
  );
};

module.getOptions = (options) => {
  return Object.entries(options).reduce(
    (
      previous,
      [name, { choices, default: _default, demandOption, describe, type }],
    ) => {
      previous[name] = {
        choices,
        default: _default,
        demandOption,
        describe,
        type,
      };
      return previous;
    },
    {},
  );
};
