import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const MouseLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-mouse-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M11.141 4c-1.582 0-2.387.169-3.128.565a3.45 3.45 0 0 0-1.448 1.448C6.169 6.753 6 7.559 6 9.14v5.718c0 1.582.169 2.387.565 3.128q.504.944 1.448 1.448c.74.396 1.546.565 3.128.565h1.718c1.582 0 2.387-.169 3.128-.565a3.45 3.45 0 0 0 1.448-1.448c.396-.74.565-1.546.565-3.128V9.14c0-1.582-.169-2.387-.565-3.128a3.45 3.45 0 0 0-1.448-1.448C15.247 4.169 14.441 4 12.86 4zm0-2h1.718c2.014 0 3.094.278 4.071.801A5.45 5.45 0 0 1 19.2 5.07c.522.978.801 2.058.801 4.072v5.718c0 2.014-.279 3.094-.801 4.071A5.45 5.45 0 0 1 16.93 21.2c-.977.522-2.057.801-4.071.801H11.14c-2.014 0-3.094-.279-4.072-.801a5.45 5.45 0 0 1-2.268-2.269C4.278 17.954 4 16.874 4 14.86V9.14c0-2.014.278-3.094.801-4.072A5.45 5.45 0 0 1 7.07 2.801C8.047 2.278 9.127 2 11.141 2M11 6h2v5h-2z" />
    </svg>
  );
};
export { MouseLine };
