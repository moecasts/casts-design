import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const SafariLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-safari-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m17.813 6.503-4.398 6.911-6.911 4.398A7.97 7.97 0 0 0 11 19.938V18h2v1.938a7.96 7.96 0 0 0 3.906-1.618l-1.37-1.37 1.414-1.414 1.37 1.37A7.96 7.96 0 0 0 19.939 13h-1.938v-2h1.938a7.97 7.97 0 0 0-2.126-4.497m-.315-.315a7.97 7.97 0 0 0-4.497-2.126V6h-2V4.062A7.96 7.96 0 0 0 7.095 5.68l1.37 1.37-1.414 1.414-1.37-1.37A7.96 7.96 0 0 0 4.063 11H6v2H4.063a7.97 7.97 0 0 0 2.126 4.497l4.398-6.911zM12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10" />
    </svg>
  );
};
export { SafariLine };
