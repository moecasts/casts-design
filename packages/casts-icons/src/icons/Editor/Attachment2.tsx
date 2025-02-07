import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Attachment2 = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-attachment2`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m14.829 7.757-5.657 5.657a1 1 0 1 0 1.414 1.414l5.657-5.656A3 3 0 0 0 12 4.929l-5.657 5.657a5 5 0 0 0 7.071 7.07L19.071 12l1.414 1.414-5.656 5.657a7 7 0 0 1-9.9-9.9l5.657-5.656a5 5 0 0 1 7.071 7.07L12 16.244A3 3 0 0 1 7.758 12l5.656-5.657z" />
    </svg>
  );
};
export { Attachment2 };
