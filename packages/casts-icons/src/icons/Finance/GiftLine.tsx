import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const GiftLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-gift-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M15.005 2.003a4 4 0 0 1 3.464 6h4.536v2h-2v10a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1v-10h-2v-2H5.54a4 4 0 0 1 6.465-4.646 3.983 3.983 0 0 1 2.999-1.354Zm-4 8h-6v9h6v-9Zm8 0h-6v9h6v-9Zm-10-6a2 2 0 0 0-.15 3.994l.15.006h2v-2a2 2 0 0 0-1.697-1.977l-.154-.018-.15-.005Zm6 0a2 2 0 0 0-1.995 1.85l-.005.15v2h2a2 2 0 0 0 1.994-1.85l.006-.15a2 2 0 0 0-2-2Z" />
    </svg>
  );
};
export { GiftLine };
