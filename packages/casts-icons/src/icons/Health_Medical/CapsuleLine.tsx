import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const CapsuleLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-capsule-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M19.779 4.222a6 6 0 0 1 0 8.485l-7.072 7.071a6 6 0 0 1-8.485-8.485l7.071-7.071a6 6 0 0 1 8.486 0Zm-5.657 11.313L8.466 9.878l-2.83 2.83a4 4 0 0 0 5.657 5.656l2.83-2.83Zm4.242-9.899a4 4 0 0 0-5.657 0L9.88 8.464l5.657 5.657 2.827-2.828a4 4 0 0 0 0-5.657Z" />
    </svg>
  );
};
export { CapsuleLine };
