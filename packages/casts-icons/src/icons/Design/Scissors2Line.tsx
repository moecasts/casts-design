import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Scissors2Line = (initProps: IconProps) => {
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
    `${prefixCls}-scissors2-line`,
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
      <path d="m12 13.41-2.554 2.555a4 4 0 1 1-1.414-1.414l2.554-2.554-6.021-6.021a2 2 0 0 1 0-2.829L12 10.582l7.435-7.435a2 2 0 0 1 0 2.829l-6.02 6.02 2.553 2.554a4 4 0 1 1-1.414 1.414zm-6 6.587a2 2 0 1 0 0-4 2 2 0 0 0 0 4m12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    </svg>
  );
};
export { Scissors2Line };
