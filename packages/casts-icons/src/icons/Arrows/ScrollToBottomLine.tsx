import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ScrollToBottomLine = (initProps: IconProps) => {
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
    `${prefixCls}-scroll-to-bottom-line`,
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
      <path d="M8.013 4.565C8.753 4.169 9.559 4 11.14 4h1.718c1.582 0 2.387.169 3.128.565q.945.504 1.448 1.448c.396.74.565 1.546.565 3.128v5.718c0 1.582-.169 2.387-.565 3.128a3.45 3.45 0 0 1-1.448 1.448c-.74.396-1.546.565-3.128.565H11.14c-1.582 0-2.387-.169-3.128-.565a3.45 3.45 0 0 1-1.448-1.448C6.169 17.247 6 16.441 6 14.86V9.14c0-1.582.169-2.387.565-3.128a3.45 3.45 0 0 1 1.448-1.448M12.859 2H11.14c-2.014 0-3.094.278-4.072.801A5.45 5.45 0 0 0 4.801 5.07C4.278 6.047 4 7.127 4 9.141v5.718c0 2.014.278 3.094.801 4.071A5.45 5.45 0 0 0 7.07 21.2c.978.522 2.058.801 4.072.801h1.718c2.014 0 3.094-.279 4.071-.801A5.45 5.45 0 0 0 19.2 18.93c.522-.977.801-2.057.801-4.071V9.14c0-2.014-.279-3.094-.801-4.072a5.45 5.45 0 0 0-2.269-2.268C15.953 2.278 14.873 2 12.86 2M13 6h-2v5h2zm-5.242 7.758L12 18.001l4.242-4.243-1.414-1.414L12 15.172l-2.829-2.828z" />
    </svg>
  );
};
export { ScrollToBottomLine };
