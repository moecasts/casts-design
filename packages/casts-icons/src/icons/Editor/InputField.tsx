import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const InputField = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-input-field`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M8 5h3v14H8v2h8v-2h-3V5h3V3H8zM2 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6v-2H3V9h5V7zm14 2h5v6h-5v2h6a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-6z" />
    </svg>
  );
};
export { InputField };
