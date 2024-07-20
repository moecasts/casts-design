import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Dashboard3Fill = (initProps: IconProps) => {
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
    `${prefixCls}-dashboard3-fill`,
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm4.596 5.404a.596.596 0 0 0-.763-.067c-2.89 2.028-4.52 3.23-4.894 3.602a1.5 1.5 0 0 0 2.122 2.122c.219-.22 1.418-1.851 3.598-4.897a.59.59 0 0 0-.063-.76ZM17.5 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-11 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm2.318-3.596a1 1 0 1 0-1.414 1.414 1 1 0 0 0 1.414-1.414ZM12 5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
    </svg>
  );
};
export { Dashboard3Fill };
