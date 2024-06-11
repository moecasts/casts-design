import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const VimeoLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-vimeo-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M17.994 3.004C20.427 3.004 22 4.516 22 7.5c0 1.72-.998 3.94-1.832 5.235-2.789 4.333-6.233 8.74-9.643 8.74-3.706 0-4.67-6.831-5.092-8.432-.422-1.601-.533-2.21-1.17-3.233-.317.22-.76.529-1.33.93a.5.5 0 0 1-.693-.117L.926 8.807a.5.5 0 0 1 .027-.62C3.78 4.915 6.129 3.278 8 3.278c2.392 0 3.125 2.816 3.324 4.223.3 2.117.69 4.738 1.245 5.872.556-.792 2.18-2.888 1.966-3.99-.094-.487-1.317.183-1.887.078-.425-.08-.805-.402-.805-1.026 0-1.31 1.851-5.43 6.15-5.43Zm.007 2c-2.194 0-3.251 1.533-3.653 2.208 1.25.046 1.97.818 2.134 1.803.388 2.33-1.917 4.92-2.34 5.565-.396.603-3.061 3.328-4.25-3.36-.112-.629-.367-2.163-.665-4.186-.17-1.151-.872-1.763-1.229-1.763-.843 0-1.92.65-3.856 2.515 1.905-.115 2.545 2.276 2.917 3.633.815 2.984 1.57 8.055 3.62 8.055 1.726 0 4.438-2.645 7.37-7.038.208-.313 1.965-3.025 1.965-5.037 0-2.395-1.469-2.395-2.013-2.395Z" />
    </svg>
  );
};
export { VimeoLine };
