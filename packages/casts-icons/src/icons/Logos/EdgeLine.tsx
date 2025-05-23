import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const EdgeLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-edge-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M8.008 14.001A5 5 0 0 0 8 14.25c0 2.382 1.753 4.75 5 4.75 2.373 0 4.528-.655 6-1.553v3.35c-1.789.767-3.888 1.203-6 1.203-5.502 0-8-3.47-8-7.75 0-3.231 2.041-6 4.943-7.164C8.54 8.663 8 10.341 8 10.996l10 .004c0-3.406-2.548-6-6-6-5 0-8.001 3.988-9 5.999.29-4.762 4.01-8.999 9-8.999 5.2 0 9 4.03 9 9v3h-13z" />
    </svg>
  );
};
export { EdgeLine };
