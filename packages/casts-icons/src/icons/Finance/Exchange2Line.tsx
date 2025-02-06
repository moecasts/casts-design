import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Exchange2Line = (initProps: IconProps) => {
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
    `${prefixCls}-exchange2-line`,
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
      <path d="M7 21.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m10-10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m-10 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m10-10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M3 8a5 5 0 0 1 5-5h3v2H8a3 3 0 0 0-3 3v3H3zm18 5h-2v3a3 3 0 0 1-3 3h-3v2h3a5 5 0 0 0 5-5z" />
    </svg>
  );
};
export { Exchange2Line };
