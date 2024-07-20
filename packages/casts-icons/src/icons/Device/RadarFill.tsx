import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const RadarFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-radar-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m14.368 4.398-3.484 6.035 1.732 1 3.485-6.035c4.169 2.772 6.305 7.08 4.56 10.102-1.86 3.222-7.19 3.355-11.91.63C4.028 13.402 1.48 8.721 3.34 5.5c1.745-3.023 6.543-3.327 11.028-1.102Zm1.516-2.625 1.732 1-1.5 2.598-1.732-1 1.5-2.598ZM6.732 20H17v2H5.018a.998.998 0 0 1-1.015-.922.995.995 0 0 1 .131-.578l2.25-3.897 1.732 1L6.732 20Z" />
    </svg>
  );
};
export { RadarFill };
