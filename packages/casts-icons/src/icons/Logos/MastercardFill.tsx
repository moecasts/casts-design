import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const MastercardFill = (initProps: IconProps) => {
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
    `${prefixCls}-mastercard-fill`,
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
      <path d="M12.001 6.654a6.79 6.79 0 0 1 2.596 5.344A6.79 6.79 0 0 1 12 17.34a6.79 6.79 0 0 1-2.596-5.343 6.79 6.79 0 0 1 2.596-5.344m-.87-.582A7.78 7.78 0 0 0 8.402 12a7.78 7.78 0 0 0 2.728 5.926 6.798 6.798 0 1 1 .003-11.854m1.742 11.854A7.78 7.78 0 0 0 15.602 12a7.78 7.78 0 0 0-2.73-5.928 6.798 6.798 0 1 1 .003 11.854" />
    </svg>
  );
};
export { MastercardFill };
