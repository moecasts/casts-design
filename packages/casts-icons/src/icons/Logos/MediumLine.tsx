import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const MediumLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-medium-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M8 7a5 5 0 1 0 0 10A5 5 0 0 0 8 7m0-2a7 7 0 0 1 5.804 3.086l.034-.069C14.343 7.007 15.227 6 16.5 6c1.181 0 2.027.866 2.547 1.798q.058-.076.12-.147c.29-.325.737-.651 1.333-.651s1.044.326 1.332.65c.29.327.505.743.665 1.17.323.863.503 1.987.503 3.18s-.18 2.317-.503 3.18c-.16.427-.375.843-.665 1.17-.288.324-.736.65-1.332.65s-1.044-.326-1.332-.65a3 3 0 0 1-.121-.148C18.527 17.134 17.68 18 16.5 18c-1.273 0-2.157-1.006-2.662-2.017l-.034-.069A7 7 0 1 1 8 5m12 7c0 .913.08 1.933.5 2.764.42-.83.5-1.85.5-2.764s-.08-1.933-.5-2.764c-.42.83-.5 1.85-.5 2.764m-2 0c0-.76-.213-4-1.5-4S15 11.24 15 12s.213 4 1.5 4 1.5-3.24 1.5-4" />
    </svg>
  );
};
export { MediumLine };
