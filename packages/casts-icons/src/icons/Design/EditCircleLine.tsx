import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const EditCircleLine = (initProps: IconProps) => {
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
    `${prefixCls}-edit-circle-line`,
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
      <path d="M12.684 4.025a8 8 0 1 0 7.287 7.287 8 8 0 0 0-.603-2.439l1.5-1.502A9.94 9.94 0 0 1 22 11.997c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10q.378 0 .749.027a10 10 0 0 1 3.877 1.104L15.125 4.63a8 8 0 0 0-2.44-.604m7.801-1.928L21.9 3.511l-9.193 9.193-1.412.002-.002-1.416z" />
    </svg>
  );
};
export { EditCircleLine };
