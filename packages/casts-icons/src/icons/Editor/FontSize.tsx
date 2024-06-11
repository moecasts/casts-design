import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FontSize = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-font-size`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M11.246 15H4.754l-2 5H.6L7 4h2l6.4 16h-2.154l-2-5Zm-.8-2L8 6.885 5.554 13h4.892ZM21 12.535V12h2v8h-2v-.535a4 4 0 1 1 0-6.93ZM19 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </svg>
  );
};
export { FontSize };
