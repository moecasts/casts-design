import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Puzzle2Line = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-puzzle2-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M7 5a4 4 0 1 1 8 0h5a1 1 0 0 1 1 1v4.17a1 1 0 0 1-1.333.944 2 2 0 1 0 0 3.773 1 1 0 0 1 1.333.942V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm4-2a2 2 0 0 0-1.886 2.667A1 1 0 0 1 8.17 7H5v12h14v-2a4 4 0 0 1 0-8V7h-5.17a1 1 0 0 1-.944-1.333Q13 5.355 13 5a2 2 0 0 0-2-2" />
    </svg>
  );
};
export { Puzzle2Line };
