import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const CoinsFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-coins-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M14.005 2.003a8 8 0 0 1 3.292 15.293A8 8 0 1 1 6.711 6.71a8 8 0 0 1 7.294-4.707m-3 7h-2v1a2.5 2.5 0 0 0-.164 4.994l.164.006h2l.09.008a.5.5 0 0 1 0 .984l-.09.008h-4v2h2v1h2v-1a2.5 2.5 0 0 0 .164-4.995l-.164-.005h-2l-.09-.008a.5.5 0 0 1 0-.984l.09-.008h4v-2h-2zm3-5A5.99 5.99 0 0 0 9.52 6.016a8 8 0 0 1 8.47 8.471 6 6 0 0 0-3.986-10.484" />
    </svg>
  );
};
export { CoinsFill };
