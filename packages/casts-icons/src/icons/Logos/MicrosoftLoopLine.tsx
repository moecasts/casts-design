import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const MicrosoftLoopLine = (initProps: IconProps) => {
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
    `${prefixCls}-microsoft-loop-line`,
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
      <path d="M12 4a8 8 0 1 1 0 16H7.69a6.5 6.5 0 0 0 1.734-3.5H12A4.5 4.5 0 1 0 7.5 12v3.5A4.5 4.5 0 0 1 4 19.889V12a8 8 0 0 1 8-8m0 18c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12v10zm-2.5-7.5V12a2.5 2.5 0 1 1 2.5 2.5z" />
    </svg>
  );
};
export { MicrosoftLoopLine };
