import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const DiamondRingLine = (initProps: IconProps) => {
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
    `${prefixCls}-diamond-ring-line`,
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
      <path d="M9.465 1 7.69 3.661l1.865 1.696a8.5 8.5 0 1 0 4.889 0l1.864-1.696L14.535 1zM12 7a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13m-1.69-3.661L10.534 3h2.93l.226.339L12 4.876z" />
    </svg>
  );
};
export { DiamondRingLine };
