import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FileVideoLine = (initProps: IconProps) => {
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
    `${prefixCls}-file-video-line`,
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
      <path d="M15 4v4h4v12H5V4h10ZM3.998 2A.995.995 0 0 0 3 2.992v18.016a1 1 0 0 0 .993.992h16.014A1 1 0 0 0 21 20.992V7l-5-5H3.998Zm11.003 9.667-4.88-3.253a.4.4 0 0 0-.621.333v6.505a.4.4 0 0 0 .622.333L15 12.333a.401.401 0 0 0 0-.666Z" />
    </svg>
  );
};
export { FileVideoLine };
