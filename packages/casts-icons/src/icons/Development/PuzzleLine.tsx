import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const PuzzleLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-puzzle-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M7 5a4 4 0 1 1 8 0h3a1 1 0 0 1 1 1v3a4 4 0 0 1 0 8v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm4-2a2 2 0 0 0-1.886 2.667A1 1 0 0 1 8.17 7H5v12h12v-3.17a1 1 0 0 1 1.333-.944Q18.646 15 19 15a2 2 0 1 0-.667-3.886A1 1 0 0 1 17 10.17V7h-3.17a1 1 0 0 1-.944-1.333Q13 5.355 13 5a2 2 0 0 0-2-2" />
    </svg>
  );
};
export { PuzzleLine };
