import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const MailVolumeFill = (initProps: IconProps) => {
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
    `${prefixCls}-mail-volume-fill`,
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
      <path d="M20 14.5v9L16.667 21H14v-4h2.667zM21 3a1 1 0 0 1 1 1v10.529A6 6 0 0 0 12.34 21L3.002 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm0 14a2 2 0 0 1 .15 3.994L21 21zM5.647 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.286 5.438z" />
    </svg>
  );
};
export { MailVolumeFill };
