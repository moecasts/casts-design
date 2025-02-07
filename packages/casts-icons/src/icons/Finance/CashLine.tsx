import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const CashLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-cash-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8m9.005-11.997h-18a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-14a1 1 0 0 0-1-1m-17 11.643V8.354a3.51 3.51 0 0 0 2.35-2.351h11.291a3.51 3.51 0 0 0 2.359 2.353v7.288a3.51 3.51 0 0 0-2.36 2.359H6.355a3.51 3.51 0 0 0-2.351-2.357" />
    </svg>
  );
};
export { CashLine };
