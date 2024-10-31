import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ProhibitedLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(
    `${prefixCls}`,
    `${prefixCls}-prohibited-line`,
    className,
  );
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M7.094 5.68 18.32 16.906A8 8 0 0 0 7.094 5.68m9.812 12.64L5.68 7.094A8 8 0 0 0 16.906 18.32M4.929 4.929A9.97 9.97 0 0 1 12 2c5.523 0 10 4.477 10 10a9.97 9.97 0 0 1-2.929 7.071A9.97 9.97 0 0 1 12 22C6.477 22 2 17.523 2 12a9.97 9.97 0 0 1 2.929-7.071" />
    </svg>
  );
};
export { ProhibitedLine };
