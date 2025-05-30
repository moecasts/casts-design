import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const HeartsLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-hearts-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M19.243 4.757a6 6 0 0 1 1.65 5.38c.568.16 1.106.463 1.554.908a3.55 3.55 0 0 1 0 5.047L17 21.5l-3.022-3L11 21.485 2.52 12.993a6 6 0 0 1 8.48-8.464 6 6 0 0 1 8.242.228m-6.281 7.708a1.55 1.55 0 0 0 0 2.208L17 18.682l4.038-4.009a1.55 1.55 0 0 0 0-2.208 1.614 1.614 0 0 0-2.268.002l-1.772 1.754-1.407-1.396-.363-.36a1.613 1.613 0 0 0-2.266 0m-8.79-6.293a4 4 0 0 0-.192 5.451L11 18.654l1.559-1.562-1.006-1a3.55 3.55 0 0 1 0-5.047 3.614 3.614 0 0 1 5.084 0l.363.36.363-.36a3.6 3.6 0 0 1 1.465-.882 4 4 0 0 0-1.001-3.993 4 4 0 0 0-5.49-.153l-1.335 1.198-1.336-1.197a4 4 0 0 0-5.494.154" />
    </svg>
  );
};
export { HeartsLine };
