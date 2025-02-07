import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Formula = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-formula`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M10 2a4 4 0 0 0-4 4v3H3v2h3v7a2 2 0 0 1-2 2H3v2h1a4 4 0 0 0 4-4v-7h3V9H8V6a2 2 0 0 1 2-2h1V2zm5.202 14.997L11.891 21h2.595l2.014-2.434L18.514 21h2.595l-3.311-4.003L21.105 13h-2.596L16.5 15.428 14.491 13h-2.595z" />
    </svg>
  );
};
export { Formula };
