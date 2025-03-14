import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const TyphoonFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-typhoon-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m17.654 1.7-2.782 2.533a9.1 9.1 0 0 1 3.49 1.973c3.512 3.2 3.512 8.388 0 11.588q-3.888 3.54-12.016 4.506l2.782-2.533a9.1 9.1 0 0 1-3.49-1.973c-3.512-3.2-3.533-8.369 0-11.588Q9.527 2.666 17.655 1.7M12 8c-2.485 0-4.5 1.79-4.5 4s2.015 4 4.5 4 4.5-1.79 4.5-4-2.015-4-4.5-4" />
    </svg>
  );
};
export { TyphoonFill };
