import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const RoundedCorner = (initProps: IconProps) => {
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
    `${prefixCls}-rounded-corner`,
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
      <path d="M21 19v2h-2v-2zm-4 0v2h-2v-2zm-4 0v2h-2v-2zm-4 0v2H7v-2zm-4 0v2H3v-2zm16-4v2h-2v-2zM5 15v2H3v-2zm0-4v2H3v-2zm11-8a5 5 0 0 1 4.995 4.783L21 8v5h-2V8a3.01 3.01 0 0 0-2.824-2.995L16 5h-5V3zM5 7v2H3V7zm0-4v2H3V3zm4 0v2H7V3z" />
    </svg>
  );
};
export { RoundedCorner };
