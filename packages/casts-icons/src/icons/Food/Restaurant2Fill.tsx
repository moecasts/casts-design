import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Restaurant2Fill = (initProps: IconProps) => {
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
    `${prefixCls}-restaurant2-fill`,
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
      <path d="m4.222 3.808 6.718 6.717-2.829 2.829-3.889-3.89a4 4 0 0 1 0-5.656m10.046 8.338-.853.854 7.07 7.071-1.413 1.414L12 14.415l-7.072 7.07-1.414-1.414 9.339-9.339c-.588-1.457.02-3.555 1.621-5.157 1.953-1.952 4.644-2.427 6.01-1.06 1.368 1.366.893 4.057-1.06 6.01-1.602 1.602-3.7 2.21-5.157 1.621" />
    </svg>
  );
};
export { Restaurant2Fill };
