import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const WaterFlashLine = (initProps: IconProps) => {
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
    `${prefixCls}-water-flash-line`,
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
      <path d="m12.005 3.103-4.95 4.95a7 7 0 1 0 9.9 0l-4.95-4.95Zm0-2.828 6.364 6.364A9 9 0 1 1 5.64 19.367a9 9 0 0 1 0-12.728L12.005.275Zm1 10.728h2.5l-4.5 6.5v-4.5h-2.5l4.5-6.5v4.5Z" />
    </svg>
  );
};
export { WaterFlashLine };
