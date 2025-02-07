import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Home9Fill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-home9-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M12.581 2.686a1 1 0 0 0-1.162 0l-9.5 6.786 1.162 1.627L12 4.73l8.919 6.37 1.162-1.627zm7 10-7-5a1 1 0 0 0-1.162 0l-7 5a1 1 0 0 0-.42.814V20a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6.5a1 1 0 0 0-.418-.814" />
    </svg>
  );
};
export { Home9Fill };
