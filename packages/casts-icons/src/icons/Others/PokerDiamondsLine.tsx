import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const PokerDiamondsLine = (initProps: IconProps) => {
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
    `${prefixCls}-poker-diamonds-line`,
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
      <path d="M4.036 10.734a2 2 0 0 0 0 2.533l7.19 8.787a1 1 0 0 0 1.548 0l7.19-8.787a2 2 0 0 0 0-2.533l-7.19-8.788a1 1 0 0 0-1.548 0zM12 4.158 18.416 12 12 19.842 5.584 12z" />
    </svg>
  );
};
export { PokerDiamondsLine };
