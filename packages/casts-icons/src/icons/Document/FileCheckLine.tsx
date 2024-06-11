import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FileCheckLine = (initProps: IconProps) => {
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
    `${prefixCls}-file-check-line`,
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
      <path d="M12 20v2H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.447 2 3.998 2H16l5 5v7h-2V8h-4V4H5v16h7Zm2.465-.535L18 23l4.95-4.95-1.414-1.414L18 20.172 15.88 18.05l-1.414 1.415Z" />
    </svg>
  );
};
export { FileCheckLine };
