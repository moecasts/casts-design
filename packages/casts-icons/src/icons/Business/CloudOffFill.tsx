import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const CloudOffFill = (initProps: IconProps) => {
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
    `${prefixCls}-cloud-off-fill`,
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
      <path d="m3.515 2.1 19.092 19.092-1.415 1.415-2.014-2.015A5.984 5.984 0 0 1 17 21H7A6 6 0 0 1 5.008 9.339a6.992 6.992 0 0 1 .353-2.563L2.1 3.514 3.515 2.1ZM17 9a6.003 6.003 0 0 1 5.204 8.989L14.01 9.796C14.89 9.29 15.91 9 17 9Zm-5-7a7.003 7.003 0 0 1 6.765 5.195 8.027 8.027 0 0 0-6.206 1.15L7.694 3.48A6.97 6.97 0 0 1 12 2Z" />
    </svg>
  );
};
export { CloudOffFill };
