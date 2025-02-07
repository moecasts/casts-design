import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const MemoriesFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-memories-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M22 12c0-5.523-4.477-10-10-10a9.98 9.98 0 0 0-7.553 3.446L2 3v6h6L5.865 6.865A8 8 0 1 1 4 12H2c0 5.523 4.477 10 10 10s10-4.477 10-10M10.777 8.518l4.599 3.066a.5.5 0 0 1 0 .832l-4.599 3.066a.5.5 0 0 1-.777-.416V8.934a.5.5 0 0 1 .777-.416" />
    </svg>
  );
};
export { MemoriesFill };
