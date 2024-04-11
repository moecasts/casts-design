import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ArrowLeftDoubleFill = (initProps: IconProps) => {
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
    `${prefixCls}-arrow-left-double-fill`,
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
      <path d="m4.836 12 6.207 6.207 1.414-1.414L7.664 12l4.793-4.793-1.414-1.414L4.836 12Zm5.65 0 6.207 6.207 1.414-1.414L13.314 12l4.793-4.793-1.414-1.414L10.486 12Z" />
    </svg>
  );
};
export { ArrowLeftDoubleFill };
