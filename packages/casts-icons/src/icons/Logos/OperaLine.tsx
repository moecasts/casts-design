import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const OperaLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-opera-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M14.767 19.51a8.003 8.003 0 0 0 0-15.02C16.712 5.977 18 8.935 18 12s-1.289 6.024-3.235 7.51M9.235 4.49a8.003 8.003 0 0 0 0 15.02C7.29 18.023 6.001 15.065 6.001 12S7.29 5.976 9.235 4.49M12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m0-3.5c2 0 4-3.033 4-6.5s-2-6.5-4-6.5-4 3.033-4 6.5 2 6.5 4 6.5" />
    </svg>
  );
};
export { OperaLine };
