import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const SoundcloudFill = (initProps: IconProps) => {
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
    `${prefixCls}-soundcloud-fill`,
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
      <path d="M10.464 8.596c.265 0 .48 2.106.48 4.704l-.001.351c-.019 2.434-.226 4.353-.479 4.353-.256 0-.465-1.965-.48-4.44v-.352c.005-2.557.218-4.616.48-4.616Zm-1.664.96c.259 0 .47 1.8.48 4.054v.34c-.01 2.254-.221 4.054-.48 4.054-.255 0-.464-1.755-.48-3.97v-.34l.002-.34c.025-2.133.23-3.798.478-3.798Zm-1.664 0c.255 0 .464 1.755.48 3.97v.34l-.002.34c-.025 2.133-.23 3.798-.478 3.798-.259 0-.47-1.8-.48-4.054v-.34c.01-2.254.221-4.054.48-4.054Zm-1.664.576c.265 0 .48 1.762.48 3.936l-.002.335c-.02 2.017-.227 3.601-.478 3.601-.262 0-.474-1.717-.48-3.852v-.168c.006-2.135.218-3.852.48-3.852ZM3.808 11.86c.265 0 .48 1.375.48 3.072v.158c-.013 1.623-.223 2.914-.48 2.914-.265 0-.48-1.375-.48-3.072v-.158c.013-1.623.223-2.914.48-2.914Zm10.784-4.8c2.58 0 4.72 1.886 5.118 4.355a3.36 3.36 0 1 1 .993 6.589H12.48a.768.768 0 0 1-.768-.768V7.933a5.16 5.16 0 0 1 2.88-.873ZM2.144 11.668c.265 0 .48 1.333.48 2.976v.156c-.014 1.57-.223 2.82-.48 2.82-.26 0-.473-1.29-.48-2.898v-.078c0-1.643.215-2.976.48-2.976Zm-1.664.96c.265 0 .48.946.48 2.112v.131c-.016 1.105-.225 1.981-.48 1.981-.265 0-.48-.946-.48-2.112v-.131c.016-1.105.225-1.98.48-1.98Z" />
    </svg>
  );
};
export { SoundcloudFill };
