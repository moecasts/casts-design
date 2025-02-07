import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const CreativeCommonsLine = (initProps: IconProps) => {
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
    `${prefixCls}-creative-commons-line`,
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
      <path d="M9 8c1.104 0 2.105.448 2.829 1.173l-1.414 1.413a2 2 0 1 0 0 2.828l1.413 1.414A4.001 4.001 0 0 1 5 12c0-2.208 1.792-4 4-4m9.829 1.173A4.001 4.001 0 0 0 12 12a4.001 4.001 0 0 0 6.828 2.828l-1.414-1.414a2 2 0 1 1 0-2.828zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16" />
    </svg>
  );
};
export { CreativeCommonsLine };
