import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const CornerUpRightDoubleLine = (initProps: IconProps) => {
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
    `${prefixCls}-corner-up-right-double-line`,
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
      <path d="M4 10v9h2v-7h6.172l-3.95 3.95 1.414 1.414L16 11 9.636 4.636 8.222 6.05l3.95 3.95zm11.25-5.364L13.836 6.05l4.95 4.95-4.95 4.95 1.414 1.414L21.614 11z" />
    </svg>
  );
};
export { CornerUpRightDoubleLine };
