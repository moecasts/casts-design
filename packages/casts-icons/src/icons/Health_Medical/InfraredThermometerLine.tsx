import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const InfraredThermometerLine = (initProps: IconProps) => {
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
    `${prefixCls}-infrared-thermometer-line`,
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
      <path d="M21 2v9h-3.001L18 12a4 4 0 0 1-4 4h-1.379l-.613 3.111.911 1.321A1 1 0 0 1 12.096 22H3l2.313-10.024L3 11l4-9h14Zm-2 2H8.3L5.655 9.95l1.985.837L5.514 20h4.678l-.309-.448L11.96 9H19V4Zm-3.001 7h-2.394l-.591 3H14a2 2 0 0 0 2-2l-.001-1Z" />
    </svg>
  );
};
export { InfraredThermometerLine };
