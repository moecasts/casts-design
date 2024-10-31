import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const AngularjsLine = (initProps: IconProps) => {
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
    `${prefixCls}-angularjs-line`,
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
      <path d="m17.524 16.65.489-.27 1.118-9.71-7.13-2.546-7.132 2.545 1.119 9.71.474.263L12 4.21zm-1.1.61h-.798l-1.168-2.92H9.523l-1.169 2.92h-.778L12 19.713zM12 2l9.3 3.32-1.418 12.31L12 22 4.12 17.63 2.7 5.32zm1.698 10.54L12 8.45l-1.698 4.09z" />
    </svg>
  );
};
export { AngularjsLine };
