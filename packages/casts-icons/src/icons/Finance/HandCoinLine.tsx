import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const HandCoinLine = (initProps: IconProps) => {
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
    `${prefixCls}-hand-coin-line`,
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
      <path d="M5.005 9.003a1 1 0 0 1 1 1 6.97 6.97 0 0 1 4.33 1.5h2.17c1.332 0 2.53.58 3.354 1.5h3.146a5 5 0 0 1 4.516 2.851c-2.365 3.12-6.194 5.149-10.516 5.149-2.79 0-5.15-.603-7.061-1.658a1 1 0 0 1-.94.658h-3a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zm1 3v5.022l.045.032c1.794 1.26 4.133 1.946 6.955 1.946 3.004 0 5.798-1.156 7.835-3.13l.133-.133-.12-.1a3 3 0 0 0-1.643-.63l-.205-.007h-2.112q.11.483.112 1v1h-9v-2l6.79-.001-.034-.079a2.5 2.5 0 0 0-2.092-1.415l-.164-.005h-2.93a4.99 4.99 0 0 0-3.57-1.5m-2-1h-1v7h1zm14-6a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-7-5a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
    </svg>
  );
};
export { HandCoinLine };
