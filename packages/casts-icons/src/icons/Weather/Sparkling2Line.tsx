import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Sparkling2Line = (initProps: IconProps) => {
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
    `${prefixCls}-sparkling2-line`,
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
      <path d="m17 1.208 1.32 2.473L20.792 5 18.32 6.319 17 8.792l-1.318-2.473-2.473-1.32 2.473-1.318zm-6.333 8.125 5 2.667-5 2.667-2.666 5-2.667-5-5-2.667 5-2.667 2.667-5zm.75 2.667L9.19 10.812 8.001 8.583l-1.189 2.229L4.584 12l2.228 1.188 1.189 2.229 1.188-2.229zm8.25 4.333-1.666-3.125-1.667 3.125L13.209 18l3.125 1.667 1.667 3.125 1.666-3.125L22.792 18z" />
    </svg>
  );
};
export { Sparkling2Line };
