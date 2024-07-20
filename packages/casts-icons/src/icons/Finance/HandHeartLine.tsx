import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const HandHeartLine = (initProps: IconProps) => {
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
    `${prefixCls}-hand-heart-line`,
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
      <path d="M5.005 9.003a1 1 0 0 1 1 1 6.97 6.97 0 0 1 4.33 1.5h2.17c1.332 0 2.529.579 3.353 1.498l3.147.002a5 5 0 0 1 4.516 2.851c-2.365 3.12-6.194 5.149-10.516 5.149-2.79 0-5.15-.604-7.061-1.658a.998.998 0 0 1-.94.658h-3a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3Zm1 3v5.02l.045.034c1.794 1.26 4.133 1.946 6.955 1.946 3.004 0 5.798-1.156 7.835-3.13l.133-.133-.12-.1a2.994 2.994 0 0 0-1.643-.63l-.205-.007-2.112-.001c.073.322.112.657.112 1v1h-9v-2h6.79l-.034-.079a2.501 2.501 0 0 0-2.092-1.415l-.164-.005h-2.93a4.985 4.985 0 0 0-3.57-1.5Zm-2-1h-1v7h1v-7Zm9.646-7.425.354.354.353-.354a2.5 2.5 0 0 1 3.536 3.536l-3.89 3.889-3.888-3.89a2.5 2.5 0 1 1 3.535-3.535ZM11.53 4.992a.5.5 0 0 0-.059.637l.058.07 2.475 2.475 2.476-2.475a.5.5 0 0 0 .058-.637l-.058-.07a.5.5 0 0 0-.638-.057l-.07.057-1.769 1.77-1.767-1.77-.068-.058a.5.5 0 0 0-.638.058Z" />
    </svg>
  );
};
export { HandHeartLine };
