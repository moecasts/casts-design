import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const DribbbleLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-dribbble-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M19.989 11.572a7.96 7.96 0 0 0-1.573-4.351 10 10 0 0 1-.92.87 13.2 13.2 0 0 1-3.313 2.01c.167.35.32.689.455 1.009v.003c.027.061.05.118.094.229l.017.04c1.513-.17 3.109-.107 4.656.103q.308.04.584.087m-9.385-7.45a46.15 46.15 0 0 1 2.692 4.27c1.223-.482 2.234-1.09 3.048-1.767.33-.274.594-.532.796-.755A7.97 7.97 0 0 0 12 4q-.714.001-1.396.121M4.253 9.997a29 29 0 0 0 2.04-.123 31.5 31.5 0 0 0 4.862-.822 54 54 0 0 0-2.7-4.227 8.02 8.02 0 0 0-4.202 5.172m1.53 7.038a14 14 0 0 1 1.575-1.899c1.454-1.49 3.17-2.65 5.156-3.29l.062-.018c-.165-.364-.32-.689-.476-.995-1.836.535-3.77.869-5.697 1.042-.94.085-1.783.122-2.403.128a7.97 7.97 0 0 0 1.784 5.032m9.221 2.38a35.951 35.951 0 0 0-1.632-5.709c-2 .727-3.596 1.79-4.829 3.058a9.8 9.8 0 0 0-1.317 1.655A7.96 7.96 0 0 0 12 20a8 8 0 0 0 3.005-.583m1.874-1.075a8 8 0 0 0 2.987-4.87c-.34-.085-.771-.17-1.245-.236a12 12 0 0 0-3.18-.033 39 39 0 0 1 1.438 5.14M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10" />
    </svg>
  );
};
export { DribbbleLine };
