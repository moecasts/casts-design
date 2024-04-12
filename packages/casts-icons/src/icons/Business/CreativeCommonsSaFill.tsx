import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const CreativeCommonsSaFill = (initProps: IconProps) => {
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
    `${prefixCls}-creative-commons-sa-fill`,
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
      <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2Zm0 4c-2.177 0-4.03 1.67-4.716 4H6l2.5 3 2.5-3H9.401C9.92 8.805 10.89 8 12 8c1.657 0 3 1.79 3 4s-1.343 4-3 4c-1.11 0-2.08-.804-2.598-1.999H7.285C7.97 16.33 9.823 18 12 18c2.761 0 5-2.686 5-6s-2.239-6-5-6Z" />
    </svg>
  );
};
export { CreativeCommonsSaFill };
