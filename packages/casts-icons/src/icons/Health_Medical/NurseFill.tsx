import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const NurseFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-nurse-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M14.957 15.564A8.009 8.009 0 0 1 19.94 22H4.062a8.009 8.009 0 0 1 4.982-6.436L12.001 20l2.956-4.436ZM18.001 2v6A6 6 0 0 1 6 8V2h12Zm-2 6H8a4 4 0 0 0 8 0Z" />
    </svg>
  );
};
export { NurseFill };
