import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const EraserLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-eraser-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m8.586 8.854-4.95 4.95L8.83 19l1.17-.001v-.001h1.171l3.779-3.779zM10 7.44l6.364 6.364 2.828-2.828-6.364-6.364zm4 11.557h7v2h-9l-3.998.002-6.487-6.488a1 1 0 0 1 0-1.414L12.12 2.491a1 1 0 0 1 1.414 0l7.779 7.778a1 1 0 0 1 0 1.414z" />
    </svg>
  );
};
export { EraserLine };
