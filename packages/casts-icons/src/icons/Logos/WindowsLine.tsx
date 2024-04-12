import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const WindowsLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-windows-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M21.001 2.5v19l-18-2v-15l18-2Zm-2 10.499-7 .001v5.487l7 .779v-6.267Zm-14 4.71 5 .556V13l-5-.001v4.71Zm14-6.71V4.735l-7 .777V11l7-.001Zm-9-5.265-5 .556V11l5 .001V5.734Z" />
    </svg>
  );
};
export { WindowsLine };
