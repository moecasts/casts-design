import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ForwardEndMiniLine = (initProps: IconProps) => {
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
    `${prefixCls}-forward-end-mini-line`,
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
      <path d="M21 6a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1M4 9.86 7.032 12 4 14.14zm-1.5 7.675a.5.5 0 0 0 .288-.092l7.133-5.035a.5.5 0 0 0 0-.817L2.788 6.556A.5.5 0 0 0 2 6.965v10.07a.5.5 0 0 0 .5.5M16.032 12 13 14.14V9.86zm-4.94-5.323a.5.5 0 0 0-.092.288v10.07a.5.5 0 0 0 .788.408l7.133-5.035a.5.5 0 0 0 0-.817l-7.133-5.035a.5.5 0 0 0-.697.12" />
    </svg>
  );
};
export { ForwardEndMiniLine };
