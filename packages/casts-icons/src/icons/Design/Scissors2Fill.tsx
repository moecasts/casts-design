import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Scissors2Fill = (initProps: IconProps) => {
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
    `${prefixCls}-scissors2-fill`,
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
      <path d="m12 14.118-2.317 2.316a4 4 0 1 1-2.121-2.121l2.317-2.316L4.21 6.329a2 2 0 0 1 0-2.828l.708-.707L12 9.875l7.081-7.081.708.707a2 2 0 0 1 0 2.828l-5.668 5.668 2.317 2.316a4 4 0 1 1-2.121 2.121L12 14.119Zm-6 5.879a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </svg>
  );
};
export { Scissors2Fill };
