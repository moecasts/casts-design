import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const OperaFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-opera-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M8.71 6.365c-1.107 1.305-1.822 3.236-1.872 5.4v.47c.051 2.165.765 4.093 1.872 5.4 1.434 1.862 3.566 3.044 5.95 3.044a7.2 7.2 0 0 0 4.005-1.226 9.94 9.94 0 0 1-7.139 2.535A10 10 0 0 1 2.001 12c0-5.524 4.477-10 10-10h.038a9.97 9.97 0 0 1 6.627 2.546 7.24 7.24 0 0 0-4.008-1.226c-2.382 0-4.514 1.183-5.95 3.045zM22.001 12a9.97 9.97 0 0 1-3.335 7.454c-2.565 1.25-4.955.376-5.747-.17 2.52-.554 4.423-3.6 4.423-7.284 0-3.685-1.903-6.73-4.423-7.283.791-.545 3.182-1.42 5.747-.171A9.97 9.97 0 0 1 22.001 12" />
    </svg>
  );
};
export { OperaFill };
