import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const SparklingFill = (initProps: IconProps) => {
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
    `${prefixCls}-sparkling-fill`,
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
      <path d="M14 4.438A2.437 2.437 0 0 0 16.438 2h1.125A2.437 2.437 0 0 0 20 4.438v1.125A2.437 2.437 0 0 0 17.562 8h-1.125A2.437 2.437 0 0 0 14 5.562V4.438ZM1 11a6 6 0 0 0 6-6h2a6 6 0 0 0 6 6v2a6 6 0 0 0-6 6H7a6 6 0 0 0-6-6v-2Zm16.25 3A3.25 3.25 0 0 1 14 17.25v1.5A3.25 3.25 0 0 1 17.25 22h1.5A3.25 3.25 0 0 1 22 18.75v-1.5A3.25 3.25 0 0 1 18.75 14h-1.5Z" />
    </svg>
  );
};
export { SparklingFill };
