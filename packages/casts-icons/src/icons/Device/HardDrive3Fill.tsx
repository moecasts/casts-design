import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const HardDrive3Fill = (initProps: IconProps) => {
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
    `${prefixCls}-hard-drive3-fill`,
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
      <path d="M5.5 2a1 1 0 0 0-.992.876l-1.5 12A1 1 0 0 0 3 15v6a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-6q0-.062-.008-.124l-1.5-12A1 1 0 0 0 18.5 2zM5 16h14v4H5zm10 1h2v2h-2zm-2 0h-2v2h2z" />
    </svg>
  );
};
export { HardDrive3Fill };
