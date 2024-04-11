import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const BikeFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-bike-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M5.5 12H4V7H2V5h6v2H6v2.795l9.813-2.629L15.233 5H12V3h3.978a1 1 0 0 1 .988.741l1.553 5.796-1.932.517-.256-.956L5.5 12ZM5 21a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm13 3a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </svg>
  );
};
export { BikeFill };
