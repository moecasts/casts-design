import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ReceiptLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-receipt-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M9 4 6 2 3 4v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-3h-2V4l-3-2-3 2-3-2zm10 12H7v3a1 1 0 1 1-2 0V5.07l1-.666 3 2 3-2 3 2 3-2 1 .666zm1 4H8.83c.11-.313.17-.65.17-1v-1h12v1a1 1 0 0 1-1 1" />
    </svg>
  );
};
export { ReceiptLine };
