import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const CentosFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-centos-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m12 13.06 4.47 4.471L12 22l-4.47-4.47L12 13.06Zm-8 3.06L7.879 20H4v-3.88Zm16 0V20h-3.88L20 16.12Zm-2.47-8.59L22 12l-4.469 4.47-4.47-4.47 4.469-4.47Zm-11.06 0L10.94 12l-4.471 4.469L2 12l4.47-4.47ZM12 2l4.469 4.469L12 10.939 7.53 6.47 12 2ZM7.879 4l-3.88 3.879L4 4h3.879ZM20 4v3.879l-3.88-3.88L20 4Z" />
    </svg>
  );
};
export { CentosFill };
