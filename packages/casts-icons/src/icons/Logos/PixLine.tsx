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
      <g clipPath="url(#a)">
        <path d="M1.747 9.525a3.5 3.5 0 0 0 0 4.95l7.778 7.778a3.5 3.5 0 0 0 4.95 0l7.778-7.778a3.5 3.5 0 0 0 0-4.95l-7.778-7.778a3.5 3.5 0 0 0-4.95 0zm4.242-1.414a1.5 1.5 0 0 1 2.122 0l2.475 2.475a2 2 0 0 0 2.828 0L15.89 8.11a1.5 1.5 0 0 1 2.121 0l2.829 2.828a1.5 1.5 0 0 1 0 2.122l-2.829 2.828v.001a1.5 1.5 0 0 1-2.121 0l-2.475-2.476a2 2 0 0 0-2.828 0L8.11 15.89a1.5 1.5 0 0 1-2.12 0l-2.83-2.828a1.5 1.5 0 0 1 0-2.122zm9.785-2.237c-.475.169-.92.443-1.3.823L12 9.172 9.525 6.697a3.5 3.5 0 0 0-1.299-.823l2.713-2.713a1.5 1.5 0 0 1 2.121 0zm0 12.252-2.713 2.713a1.5 1.5 0 0 1-2.122 0l-2.713-2.713c.474-.169.92-.443 1.299-.823L12 14.828l2.475 2.475c.38.38.824.654 1.299.823" />
      </g>
      <defs>
        <clipPath id="a">
          <rect />
        </clipPath>
      </defs>
    </svg>
  );
};
export { PixLine };
