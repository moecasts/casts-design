import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const UserHeartLine = (initProps: IconProps) => {
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
    `${prefixCls}-user-heart-line`,
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
      <path d="m17.841 15.659.176.177.178-.177a2.25 2.25 0 1 1 3.182 3.182l-3.36 3.359-3.358-3.359a2.25 2.25 0 1 1 3.182-3.182M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 7.75-7.996zm0-13c3.315 0 6 2.685 6 6a6 6 0 0 1-5.775 5.996L12 13c-3.315 0-6-2.685-6-6a6 6 0 0 1 5.775-5.996zm0 2C9.79 3 8 4.79 8 7s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4" />
    </svg>
  );
};
export { UserHeartLine };
