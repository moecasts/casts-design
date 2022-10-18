import * as icons from '@casts/icons';

const Icons = {
  line: {},
  fill: {},
};

Object.keys(icons).forEach((name) => {
  if (/Fill$/i.test(name)) {
    return (Icons.fill[name] = icons[name]);
  }

  if (/Line$/i.test(name)) {
    return (Icons.line[name] = icons[name]);
  }
});

export { Icons };
