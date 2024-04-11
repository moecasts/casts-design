import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ListCheck2 = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-list-check2`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M11 4h10v2H11V4Zm0 4h6v2h-6V8Zm0 6h10v2H11v-2Zm0 4h6v2h-6v-2ZM3 4h6v6H3V4Zm2 2v2h2V6H5Zm-2 8h6v6H3v-6Zm2 2v2h2v-2H5Z" />
    </svg>
  );
};
export { ListCheck2 };
