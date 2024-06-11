import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const LuggageCartFill = (initProps: IconProps) => {
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
    `${prefixCls}-luggage-cart-fill`,
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
      <path d="M5.5 20a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm13 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM2.172 1.757 6 5.585V17L20 17v2H5a1 1 0 0 1-1-1V6.413L.758 3.172l1.414-1.415ZM16 3a1 1 0 0 1 1 1v2h2.994C20.55 6 21 6.456 21 6.995v8.01a1 1 0 0 1-1.006.995H8.007A1.008 1.008 0 0 1 7 15.005v-8.01A1 1 0 0 1 8.007 6H11V4a1 1 0 0 1 1-1h4Zm-5 5h-1v6h1V8Zm7 0h-1v6h1V8Zm-3-3h-2v1h2V5Z" />
    </svg>
  );
};
export { LuggageCartFill };
