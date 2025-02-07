import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Brain2Fill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-brain2-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M8.5 2a3.5 3.5 0 0 0-3.46 4.03A3.5 3.5 0 0 0 3.05 12a3.5 3.5 0 0 0 .963 5.67Q4 17.832 4 18a4 4 0 0 0 7 2.646V3.05A3.5 3.5 0 0 0 8.5 2M13 3.05v17.596a4 4 0 0 0 6.986-2.977A3.5 3.5 0 0 0 20.95 12a3.5 3.5 0 0 0-1.99-5.97q.04-.26.041-.53a3.5 3.5 0 0 0-6-2.45" />
    </svg>
  );
};
export { Brain2Fill };
