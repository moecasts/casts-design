import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const CameraOffFill = (initProps: IconProps) => {
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
    `${prefixCls}-camera-off-fill`,
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
      <path d="M19.586 21H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h.586L1.394 2.808l1.414-1.415 19.799 19.8-1.415 1.414L19.586 21ZM7.556 8.97a6 6 0 0 0 8.475 8.475l-1.417-1.417a4 4 0 0 1-5.642-5.642L7.555 8.97ZM22 17.786l-4.045-4.045a6 6 0 0 0-6.695-6.695L8.107 3.892 9 3h6l2 2h4a1 1 0 0 1 1 1v11.786Zm-8.492-8.492a4.014 4.014 0 0 1 2.198 2.198l-2.197-2.198Z" />
    </svg>
  );
};
export { CameraOffFill };
