import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const CameraLensFill = (initProps: IconProps) => {
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
    `${prefixCls}-camera-lens-fill`,
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
      <path d="M9.827 21.763 14.31 14l3.532 6.117A9.955 9.955 0 0 1 12 22c-.746 0-1.473-.082-2.173-.237ZM7.89 21.12A10.029 10.029 0 0 1 2.458 15h8.965L7.89 21.119ZM2.05 13a9.964 9.964 0 0 1 2.583-7.761L9.112 13H2.05Zm4.109-9.117A9.955 9.955 0 0 1 12 2c.746 0 1.473.082 2.173.237L9.69 10 6.159 3.883ZM16.11 2.88A10.028 10.028 0 0 1 21.542 9h-8.965l3.533-6.119ZM21.95 11a9.964 9.964 0 0 1-2.583 7.761L14.888 11h7.064Z" />
    </svg>
  );
};
export { CameraLensFill };
