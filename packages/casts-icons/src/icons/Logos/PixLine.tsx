import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const PixLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-pix-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m14.473 1.745 7.778 7.778a3.5 3.5 0 0 1 0 4.95l-7.778 7.778a3.5 3.5 0 0 1-4.95 0l-7.778-7.778a3.5 3.5 0 0 1 0-4.95l7.778-7.778a3.5 3.5 0 0 1 4.95 0m-2.475 13.082-2.475 2.475c-.38.38-.825.653-1.299.822l2.713 2.713a1.5 1.5 0 0 0 2.122 0l2.713-2.713a3.5 3.5 0 0 1-1.3-.822zm-6.01-6.719-2.829 2.83a1.5 1.5 0 0 0 0 2.12l2.829 2.83a1.5 1.5 0 0 0 2.12 0l2.476-2.476a2 2 0 0 1 2.828 0l2.475 2.475a1.5 1.5 0 0 0 2.121 0l2.829-2.828a1.5 1.5 0 0 0 0-2.121l-2.829-2.829a1.5 1.5 0 0 0-2.121 0l-2.475 2.475a2 2 0 0 1-2.828 0L8.109 8.109a1.5 1.5 0 0 0-2.12 0m4.95-4.949L8.223 5.872c.474.17.92.443 1.299.823l2.475 2.475 2.475-2.475c.38-.38.824-.654 1.299-.823L13.059 3.16a1.5 1.5 0 0 0-2.122 0" />
    </svg>
  );
};
export { PixLine };
