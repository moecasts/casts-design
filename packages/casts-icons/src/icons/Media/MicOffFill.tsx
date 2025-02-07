import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const MicOffFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-mic-off-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M16.425 17.839A8.9 8.9 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11h2.016a7.002 7.002 0 0 0 9.87 5.354l-1.55-1.55A5 5 0 0 1 7 10V8.414L1.393 2.808l1.414-1.415 19.799 19.8-1.415 1.414zm2.95-2.679-1.443-1.442c.509-.81.856-1.73.997-2.718h2.016a8.95 8.95 0 0 1-1.57 4.16m-2.91-2.909-8.78-8.78A5 5 0 0 1 17 6v4c.001.81-.191 1.575-.533 2.251" />
    </svg>
  );
};
export { MicOffFill };
