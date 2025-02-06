import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const GlobeLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-globe-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M13 21h5v2H6v-2h5v-1.05a10 10 0 0 1-7.684-4.988l1.737-.992A8 8 0 1 0 15.97 3.053l.993-1.737A10 10 0 0 1 22 10c0 5.185-3.946 9.449-9 9.95zm-1-4a7 7 0 1 1 0-14 7 7 0 0 1 0 14m0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10" />
    </svg>
  );
};
export { GlobeLine };
