import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ScissorsCutFill = (initProps: IconProps) => {
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
    `${prefixCls}-scissors-cut-fill`,
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
      <path d="M9.879 11.997 7.562 9.68A4 4 0 1 1 9.683 7.56L12 9.875l6.374-6.374a2 2 0 0 1 2.829 0l.707.707L9.683 16.435a4 4 0 1 1-2.121-2.121zM6 7.997a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4m9.535-6.587 6.375 6.375-.707.707a2 2 0 0 1-2.829 0l-4.96-4.96zM16 10.997h2v2h-2zm4 0h2v2h-2zm-14 0h2v2H6zm-4 0h2v2H2z" />
    </svg>
  );
};
export { ScissorsCutFill };
