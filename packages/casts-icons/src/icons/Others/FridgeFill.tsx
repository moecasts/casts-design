import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FridgeFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-fridge-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M19.998 12v10a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1V12h16Zm-11 2h-2v5h2v-5Zm10-13a1 1 0 0 1 1 1v8h-16V2a1 1 0 0 1 1-1h14Zm-10 3h-2v4h2V4Z" />
    </svg>
  );
};
export { FridgeFill };
