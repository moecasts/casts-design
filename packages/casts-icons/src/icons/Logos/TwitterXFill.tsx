import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const TwitterXFill = (initProps: IconProps) => {
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
    `${prefixCls}-twitter-x-fill`,
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
      <path d="m17.687 3.063-4.996 5.711-4.32-5.711H2.112l7.477 9.776-7.086 8.099h3.034l5.469-6.25 4.78 6.25h6.102l-7.794-10.304 6.625-7.571zm-1.064 16.06L5.654 4.782h1.803l10.846 14.34z" />
    </svg>
  );
};
export { TwitterXFill };
