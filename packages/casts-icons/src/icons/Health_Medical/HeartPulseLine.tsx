import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const HeartPulseLine = (initProps: IconProps) => {
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
    `${prefixCls}-heart-pulse-line`,
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
      <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5-1.977-1.186-7.083-3.937-9.131-8.499L1 13v-2h1.21A9.552 9.552 0 0 1 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2Zm0 2c-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.657 4 9c0 .685.09 1.352.267 2h2.167L8.5 7.556l3 5L12.434 11H17v2h-3.434L11.5 16.444l-3-5L7.566 13H5.108c.79 1.374 1.985 2.668 3.537 3.903.745.593 1.54 1.146 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571a26.752 26.752 0 0 0 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4Z" />
    </svg>
  );
};
export { HeartPulseLine };
