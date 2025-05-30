import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const UbuntuLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-ubuntu-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m8.668 19.273 1.006-1.742a6 6 0 0 0 8.282-4.781h2.012A8 8 0 0 1 18.929 16a8 8 0 0 1-1.452 1.835 2.5 2.5 0 0 0-1.976.227 2.5 2.5 0 0 0-1.184 1.595 7.98 7.98 0 0 1-5.65-.384m-1.3-.75a7.98 7.98 0 0 1-3.157-4.7c.486-.456.79-1.104.79-1.823 0-.72-.304-1.369-.791-1.825A8 8 0 0 1 5.073 8a8 8 0 0 1 2.295-2.524l1.006 1.742a6.001 6.001 0 0 0 0 9.563zm1.3-13.796a8 8 0 0 1 5.648-.387c.152.65.562 1.238 1.185 1.598s1.337.42 1.976.227a8 8 0 0 1 2.49 5.085h-2.013a5.99 5.99 0 0 0-2.953-4.446 5.99 5.99 0 0 0-5.327-.335zM16 5.072a1.5 1.5 0 1 1 1.5-2.598A1.5 1.5 0 0 1 16 5.072M4.001 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m12 6.928a1.5 1.5 0 1 1 1.5 2.598 1.5 1.5 0 0 1-1.5-2.598" />
    </svg>
  );
};
export { UbuntuLine };
