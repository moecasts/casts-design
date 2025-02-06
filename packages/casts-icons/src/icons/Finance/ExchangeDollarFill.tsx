import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ExchangeDollarFill = (initProps: IconProps) => {
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
    `${prefixCls}-exchange-dollar-fill`,
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
      <path d="M5.378 4.513a9.96 9.96 0 0 1 6.627-2.51c5.523 0 10 4.477 10 10a9.95 9.95 0 0 1-1.793 5.715l-2.707-5.715h2.5A8 8 0 0 0 6.279 6.415zm13.253 14.98a9.96 9.96 0 0 1-6.626 2.51c-5.523 0-10-4.477-10-10 0-2.125.663-4.095 1.793-5.715l2.707 5.715h-2.5A8 8 0 0 0 17.73 17.59zm-10.126-5.49h5.5a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1v-1h2v1h2.5v2h-5.5a.5.5 0 0 0 0 1h4a2.5 2.5 0 0 1 0 5h-1v1h-2v-1h-2.5z" />
    </svg>
  );
};
export { ExchangeDollarFill };
