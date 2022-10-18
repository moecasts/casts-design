const getKebabCase = (str) =>
  str.replace(/[A-Z]/g, (item) => '-' + item.toLowerCase());

const template = (variables, { tpl }) => {
  const looseComponentName = variables.componentName.replace('Svg', '');
  const componentName = /^\d/.test(looseComponentName)
    ? `I${looseComponentName}`
    : looseComponentName;
  const exports = `export { ${componentName} }`;
  const componentNameClass = `cds-icon${getKebabCase(componentName)}`;
  return tpl`
${variables.imports};
import clsx from 'clsx';
import '../../styles.scss';

${variables.interfaces};

type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const ${componentName} = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx(
    'cds-icon',
    '${componentNameClass}',
    className,
  );
  return (
    ${variables.jsx}
  );
};
 
${exports};
`;
};

module.exports = template;
