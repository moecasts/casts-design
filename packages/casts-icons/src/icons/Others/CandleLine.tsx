import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const CandleLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-candle-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M9.172 9.331a4 4 0 0 1 0-5.656L12 .846l2.828 2.829A4 4 0 0 1 13 10.377V12h5a1 1 0 0 1 1 1v7h2v2H3v-2h2v-7a1 1 0 0 1 1-1h5v-1.623A4 4 0 0 1 9.172 9.33m1.414-4.242a2 2 0 1 0 2.828 0L12 3.675zM7 14v6h10v-6z" />
    </svg>
  );
};
export { CandleLine };
