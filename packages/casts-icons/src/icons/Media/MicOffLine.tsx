import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const MicOffLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-mic-off-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m16.425 17.839 4.767 4.768 1.415-1.415-19.8-19.799-1.413 1.415L7 8.414V10a5 5 0 0 0 6.39 4.804l1.55 1.55A7.002 7.002 0 0 1 5.07 11H3.056A9.004 9.004 0 0 0 11 18.945V23h2v-4.055a8.9 8.9 0 0 0 3.425-1.106m-4.872-4.872a3 3 0 0 1-2.52-2.52zm7.822 2.193-1.443-1.442c.509-.81.856-1.73.997-2.718h2.016a8.95 8.95 0 0 1-1.57 4.16m-2.91-2.909-1.548-1.548Q15 10.364 15 10V6a3 3 0 0 0-5.818-1.032L7.686 3.471A5 5 0 0 1 17 6v4c0 .81-.192 1.575-.534 2.251" />
    </svg>
  );
};
export { MicOffLine };
