import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FigmaLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-figma-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 2.646 7A4 4 0 0 1 13 15.465V18a4 4 0 1 1-6.646-3A4 4 0 0 1 5 12a4 4 0 0 1 1.354-3A4 4 0 0 1 5 6m6 4H9a2 2 0 1 0 0 4h2zm2 2a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-4a2 2 0 1 0 0-4h-2v4zM9 4a2 2 0 1 0 0 4h2V4zm2 12H9a2 2 0 1 0 2 2z" />
    </svg>
  );
};
export { FigmaLine };
