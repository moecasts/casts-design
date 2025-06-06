import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const PokerHeartsLine = (initProps: IconProps) => {
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
    `${prefixCls}-poker-hearts-line`,
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
      <path d="m12 8.81 1.635-2.322A3.5 3.5 0 0 1 20 8.5c0 2.879-1.96 5.621-4.357 7.836A27 27 0 0 1 12 19.146a27.064 27.064 0 0 1-3.643-2.81C5.959 14.122 4 11.379 4 8.5a3.5 3.5 0 0 1 6.365-2.012zm-1.444-4.884A5.5 5.5 0 0 0 2 8.5C2 16 12 21.485 12 21.485S22 16 22 8.5a5.5 5.5 0 0 0-10-3.163 5.5 5.5 0 0 0-1.444-1.41" />
    </svg>
  );
};
export { PokerHeartsLine };
