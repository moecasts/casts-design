import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Haze2Fill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-haze2-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M12 19a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m7.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-15 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M17 7a5 5 0 0 1 0 10q-2.765 0-5-3.121Q9.765 16.999 7 17A5 5 0 0 1 7 7q2.765 0 5 3.121Q14.235 7.001 17 7m-5-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M4.5 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m15 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </svg>
  );
};
export { Haze2Fill };
