import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Apps2Line = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-apps2-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M7 11.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m0 10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m10-10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m0 10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9M7 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m10-10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
    </svg>
  );
};
export { Apps2Line };
