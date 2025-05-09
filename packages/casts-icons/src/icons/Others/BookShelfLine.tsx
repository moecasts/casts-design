import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const BookShelfLine = (initProps: IconProps) => {
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
    `${prefixCls}-book-shelf-line`,
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
      <path d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4.703L16 20a1 1 0 0 0 1.186.77l3.912-.832a1 1 0 0 0 .77-1.186l-2.91-13.694a1 1 0 0 0-1.186-.77l-2.78.59A1 1 0 0 0 14 4h-4a1 1 0 0 0-1-1zm6 3h3v8h-3zm0 13v-3h3v3zM8 5v10H5V5zm0 12v2H5v-2zm9.332-.35 1.956-.416.416 1.956-1.956.416zm-.416-1.957-1.663-7.825 1.956-.416 1.664 7.826z" />
    </svg>
  );
};
export { BookShelfLine };
