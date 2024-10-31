import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const LockStarFill = (initProps: IconProps) => {
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
    `${prefixCls}-lock-star-fill`,
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
      <path d="M12 1a6 6 0 0 0-6 6v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9.044A6 6 0 0 1 21 14.044V9a1 1 0 0 0-1-1h-2V7a6 6 0 0 0-6-6m4 7H8V7a4 4 0 1 1 8 0zm5.145 15.14-.505-2.945 2.14-2.086-2.957-.43L18.5 15l-1.323 2.68-2.957.43 2.14 2.085-.505 2.946L18.5 21.75z" />
    </svg>
  );
};
export { LockStarFill };
