import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ArrowRightDoubleLine = (initProps: IconProps) => {
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
    `${prefixCls}-arrow-right-double-line`,
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
      <path d="m19.164 12-6.207-6.207-1.414 1.414L16.336 12l-4.793 4.793 1.414 1.414L19.164 12Zm-5.65 0L7.307 5.793 5.893 7.207 10.686 12l-4.793 4.793 1.414 1.414L13.514 12Z" />
    </svg>
  );
};
export { ArrowRightDoubleLine };
