import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const UserVoiceLine = (initProps: IconProps) => {
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
    `${prefixCls}-user-voice-line`,
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
      <path d="M1 22a8 8 0 1 1 16 0h-2a6 6 0 0 0-12 0zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4M21.548.784A13.94 13.94 0 0 1 23 7c0 2.233-.523 4.344-1.452 6.217l-1.645-1.197A11.96 11.96 0 0 0 21 7c0-1.792-.393-3.493-1.097-5.02zm-3.302 2.4A10 10 0 0 1 19 7a10 10 0 0 1-.754 3.816l-1.677-1.22A8 8 0 0 0 17 7a8 8 0 0 0-.43-2.596z" />
    </svg>
  );
};
export { UserVoiceLine };
