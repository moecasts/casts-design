import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const PaypalFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-paypal-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M20.067 8.478c.492.88.557 2.014.3 3.327-.74 3.806-3.275 5.12-6.513 5.12h-.5a.805.805 0 0 0-.794.68l-.041.22-.63 3.993-.032.17a.804.804 0 0 1-.794.679H7.72a.483.483 0 0 1-.477-.558L7.418 21h1.519l.949-6.02h1.386c4.678 0 7.749-2.203 8.795-6.502m-2.96-5.09c.762.868.984 1.81.753 3.285-.02.123-.04.24-.063.36-.735 3.773-3.088 5.446-6.955 5.446H8.957c-.63 0-1.173.414-1.353 1.002l-.015-.002-.93 5.894H3.123a.05.05 0 0 1-.051-.06l2.598-16.51A.95.95 0 0 1 6.608 2h5.975c2.183 0 3.717.469 4.524 1.388" />
    </svg>
  );
};
export { PaypalFill };
