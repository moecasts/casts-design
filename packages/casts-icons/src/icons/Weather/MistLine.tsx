import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const MistLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-mist-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M4 4h4v2H4V4Zm12 15h4v2h-4v-2ZM2 9h5v2H2V9Zm7 0h3v2H9V9Zm5 0h6v2h-6V9ZM4 14h6v2H4v-2Zm8 0h3v2h-3v-2Zm5 0h5v2h-5v-2ZM10 4h12v2H10V4ZM2 19h12v2H2v-2Z" />
    </svg>
  );
};
export { MistLine };
