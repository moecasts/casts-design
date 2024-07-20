import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FolderCloudFill = (initProps: IconProps) => {
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
    `${prefixCls}-folder-cloud-fill`,
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
      <path d="M2 4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1v6.36c-.998-1.42-2.646-2.36-4.5-2.36-2.602 0-4.799 1.853-5.36 4.282A4.743 4.743 0 0 0 10 18.25c0 1.025.325 1.974.877 2.75H3a1 1 0 0 1-1-1V4Zm12.002 11.603A2.751 2.751 0 0 0 14.75 21h5.5a2.75 2.75 0 0 0 .748-5.397C21.055 13.658 19.448 12 17.5 12c-1.948 0-3.555 1.658-3.498 3.603Z" />
    </svg>
  );
};
export { FolderCloudFill };
