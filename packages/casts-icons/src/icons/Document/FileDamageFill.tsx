import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FileDamageFill = (initProps: IconProps) => {
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
    `${prefixCls}-file-damage-fill`,
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
      <path d="m3 14 4 2.5 3-3.5 3 4 2-2.5 3 .5-3-3-2 2.5-3-5-3.5 3.75L3 10V2.992C3 2.455 3.447 2 3.998 2H14v6a1 1 0 0 0 1 1h6v11.992A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V14Zm18-7h-5V2.003L21 7Z" />
    </svg>
  );
};
export { FileDamageFill };
