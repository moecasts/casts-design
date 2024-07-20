import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Projector2Line = (initProps: IconProps) => {
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
    `${prefixCls}-projector2-line`,
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
      <path d="M22 19v2h-2v-2H4v2H2v-2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10.528A5.985 5.985 0 0 1 17 3c1.777 0 3.374.772 4.472 2H22a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1ZM11.341 7H3v10h18v-3.528A6 6 0 0 1 11.341 7ZM17 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM5 13h2v2H5v-2Zm3 0h2v2H8v-2Z" />
    </svg>
  );
};
export { Projector2Line };
