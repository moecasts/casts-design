import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const CreativeCommonsSaLine = (initProps: IconProps) => {
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
    `${prefixCls}-creative-commons-sa-line`,
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
      <path d="M17 12c0-3.314-2.238-6-5-6-2.177 0-4.03 1.67-4.716 4H6l2.5 3 2.5-3H9.401C9.92 8.805 10.89 8 12 8c1.657 0 3 1.79 3 4s-1.343 4-3 4c-1.11 0-2.08-.804-2.598-1.999H7.285C7.97 16.33 9.823 18 12 18c2.762 0 5-2.686 5-6M12 2a9.97 9.97 0 0 0-7.07 2.93A9.97 9.97 0 0 0 2 12a9.97 9.97 0 0 0 2.93 7.07A9.97 9.97 0 0 0 12 22a9.97 9.97 0 0 0 7.07-2.93A9.97 9.97 0 0 0 22 12a9.97 9.97 0 0 0-2.93-7.07A9.97 9.97 0 0 0 12 2M6.344 6.344A7.97 7.97 0 0 1 12 4c2.208 0 4.206.895 5.656 2.344A7.97 7.97 0 0 1 20 12a7.97 7.97 0 0 1-2.344 5.656A7.97 7.97 0 0 1 12 20a7.97 7.97 0 0 1-5.656-2.344A7.97 7.97 0 0 1 4 12c0-2.208.895-4.206 2.344-5.656" />
    </svg>
  );
};
export { CreativeCommonsSaLine };
