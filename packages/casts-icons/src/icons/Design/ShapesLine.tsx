import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ShapesLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-shapes-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M12 1 6 11h12L12 1Zm0 3.887L14.468 9H9.532L12 4.887ZM6.75 20a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5Zm0 2a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5ZM15 15.5v4h4v-4h-4Zm-2 6v-8h8v8h-8Z" />
    </svg>
  );
};
export { ShapesLine };
