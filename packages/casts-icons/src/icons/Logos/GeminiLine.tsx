import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const GeminiLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-gemini-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M11.124 1.09h1.751l.052.855a9.743 9.743 0 0 0 9.128 9.128l.854.052v1.75l-.854.052a9.743 9.743 0 0 0-9.128 9.128l-.052.855h-1.75l-.052-.855a9.743 9.743 0 0 0-9.128-9.128l-.854-.051v-1.751l.854-.052a9.743 9.743 0 0 0 9.128-9.128zM12 5.85A11.6 11.6 0 0 1 5.85 12 11.6 11.6 0 0 1 12 18.15 11.6 11.6 0 0 1 18.15 12 11.6 11.6 0 0 1 12 5.85" />
    </svg>
  );
};
export { GeminiLine };
