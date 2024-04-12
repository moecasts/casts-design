import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const AncientPavilionFill = (initProps: IconProps) => {
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
    `${prefixCls}-ancient-pavilion-fill`,
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
      <path d="M1.516 7.877A4.5 4.5 0 0 0 5 11.887v7.114H3v2h18v-2h-2v-7.114a4.5 4.5 0 0 0 3.484-4.01A9 9 0 0 1 12.514 2h-1.029a9 9 0 0 1-9.97 5.877ZM17 19H7V12h10v7.001Z" />
    </svg>
  );
};
export { AncientPavilionFill };
