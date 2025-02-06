import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const HandSanitizerLine = (initProps: IconProps) => {
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
    `${prefixCls}-hand-sanitizer-line`,
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
      <path d="M17 2v2l-4-.001V6h3v2a4 4 0 0 1 4 4v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a4 4 0 0 1 4-4V6h3V3.999L7.5 4c-.63 0-1.37.49-2.2 1.6L3.7 4.4C4.87 2.84 6.13 2 7.5 2zm-1 8H8a2 2 0 0 0-2 2v8h12v-8a2 2 0 0 0-2-2m-3 2v2h2v2h-2v2h-2v-2H9v-2h2v-2z" />
    </svg>
  );
};
export { HandSanitizerLine };
