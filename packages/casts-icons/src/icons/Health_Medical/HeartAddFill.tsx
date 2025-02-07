import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const HeartAddFill = (initProps: IconProps) => {
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
    `${prefixCls}-heart-add-fill`,
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
      <path d="M19 14v3h3v2h-3v3h-2v-3h-3v-2h3v-3zm1.243-9.243a6 6 0 0 1 .507 7.91 6 6 0 0 0-8.06 8.127l-.69.691-8.479-8.492a6 6 0 0 1 8.48-8.464 6 6 0 0 1 8.242.228" />
    </svg>
  );
};
export { HeartAddFill };
