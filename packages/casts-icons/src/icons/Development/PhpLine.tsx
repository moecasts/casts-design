import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const PhpLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-php-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m10.15 5.55-1.717 8.834h2l.858-4.417h1.5c.553 0 .915.44.81.982l-.668 3.435h2l.668-3.435c.316-1.627-.771-2.945-2.428-2.945h-1.5l.477-2.454zM2.173 8.004h3.75c1.795 0 2.972 1.428 2.63 3.19s-2.075 3.19-3.87 3.19h-1.75l-.477 2.455h-2zm1.141 4.417h1.75c.69 0 1.357-.55 1.489-1.227.131-.678-.321-1.227-1.012-1.227h-1.75zm13.859-4.417h3.75c1.795 0 2.972 1.428 2.63 3.19s-2.076 3.19-3.87 3.19h-1.75l-.477 2.455h-2zm1.141 4.417h1.75c.69 0 1.357-.55 1.489-1.227.131-.678-.321-1.227-1.012-1.227h-1.75z" />
    </svg>
  );
};
export { PhpLine };
