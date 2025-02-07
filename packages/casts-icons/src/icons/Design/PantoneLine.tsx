import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const PantoneLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-pantone-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m5.765 8-.296-.73a1 1 0 0 1 .553-1.302l9.272-3.746a1 1 0 0 1 1.302.552l5.619 13.908a1 1 0 0 1-.553 1.302L12.39 21.73a1 1 0 0 1-1.302-.553L11 20.96V21H7a1 1 0 0 1-1-1v-.27l-3.35-1.353a1 1 0 0 1-.552-1.302zM8 19h2.209L8 13.533zm-2-6.244-1.673 4.141L6 17.608zm1.698-5.309 4.87 12.054 7.418-2.997-4.87-12.053zm2.979 2.033a1 1 0 1 1-.75-1.855 1 1 0 0 1 .75 1.855" />
    </svg>
  );
};
export { PantoneLine };
