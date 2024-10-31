import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Group3Fill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-group3-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M2.5 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0M2 21v-4.5a4.5 4.5 0 1 1 9 0V21zm15.5-10a4 4 0 1 1 0-8 4 4 0 0 1 0 8M13 21v-4.5a4.5 4.5 0 1 1 9 0V21z" />
    </svg>
  );
};
export { Group3Fill };
