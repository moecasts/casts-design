import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const SunCloudyLine = (initProps: IconProps) => {
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
    `${prefixCls}-sun-cloudy-line`,
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
      <path d="M9.984 5.06a6.5 6.5 0 0 1 11.286 6.436A5.5 5.5 0 0 1 17.5 21H9a8 8 0 1 1 .984-15.941Zm2.071.544a8.026 8.026 0 0 1 4.403 4.495 5.533 5.533 0 0 1 3.12.307 4.5 4.5 0 0 0-7.522-4.802ZM17.5 19a3.5 3.5 0 1 0-2.5-5.95V13a6 6 0 1 0-6 6h8.5Z" />
    </svg>
  );
};
export { SunCloudyLine };
