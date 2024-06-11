import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const WebcamFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-webcam-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M11 21v-1.07A7.001 7.001 0 0 1 5 13V8a7 7 0 0 1 14 0v5a7.001 7.001 0 0 1-6 6.93V21h4v2H7v-2h4Zm1-12a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
  );
};
export { WebcamFill };
