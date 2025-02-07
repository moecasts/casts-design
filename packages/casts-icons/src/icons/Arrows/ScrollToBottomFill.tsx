import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ScrollToBottomFill = (initProps: IconProps) => {
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
    `${prefixCls}-scroll-to-bottom-fill`,
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
      <path d="M12.859 2H11.14c-2.014 0-3.094.278-4.072.801A5.45 5.45 0 0 0 4.801 5.07C4.278 6.047 4 7.127 4 9.141v5.718c0 2.014.278 3.094.801 4.071A5.45 5.45 0 0 0 7.07 21.2c.978.522 2.058.801 4.072.801h1.718c2.014 0 3.094-.279 4.071-.801A5.45 5.45 0 0 0 19.2 18.93c.522-.977.801-2.057.801-4.071V9.14c0-2.014-.279-3.094-.801-4.072a5.45 5.45 0 0 0-2.269-2.268C15.953 2.278 14.873 2 12.86 2M11 11V6h2v5zm-3.242 2.758 1.414-1.414 2.829 2.828 2.828-2.828 1.414 1.414-4.242 4.243z" />
    </svg>
  );
};
export { ScrollToBottomFill };
