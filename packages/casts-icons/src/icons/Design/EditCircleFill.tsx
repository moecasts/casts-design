import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const EditCircleFill = (initProps: IconProps) => {
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
    `${prefixCls}-edit-circle-fill`,
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
      <path d="M16.626 3.128 9.29 10.463 9.3 14.71l4.238-.008 7.331-7.33A9.956 9.956 0 0 1 22 11.996c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10c1.669 0 3.242.409 4.626 1.131Zm3.86-1.03 1.413 1.413-9.192 9.193-1.412.002-.002-1.416 9.192-9.193Z" />
    </svg>
  );
};
export { EditCircleFill };
