import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const DnaFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-dna-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M18 1c0 .716-.064 1.38-.184 2H8.232c.639 2.552 2.562 4.229 5.35 6.428-.505.437-1.036.866-1.582 1.299C8.73 8.135 6 5.668 6 1H4c0 5.466 3.21 8.464 6.386 11C7.21 14.537 4 17.534 4 23h2c0-4.96 3.08-7.434 6.618-10.214l.092-.072C16.149 10.012 20 6.987 20 1zm-.184 20H8.232c.659-2.634 2.687-4.335 5.622-6.64.443-.35.888-.697 1.327-1.051C17.766 15.599 20 18.44 20 23h-2q-.002-1.071-.184-2" />
    </svg>
  );
};
export { DnaFill };
