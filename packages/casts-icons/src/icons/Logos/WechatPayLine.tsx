import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const WechatPayLine = (initProps: IconProps) => {
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
    `${prefixCls}-wechat-pay-line`,
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
      <path d="m19.146 8.993-9.799 5.608-.07.045a.645.645 0 0 1-.3.07.655.655 0 0 1-.58-.345l-.046-.092-1.831-3.95c-.023-.046-.023-.092-.023-.138 0-.184.139-.321.324-.321.07 0 .139.023.209.069l2.155 1.515c.162.092.347.161.556.161a.936.936 0 0 0 .348-.069l8.274-3.649C16.935 6.273 14.635 5.2 12.001 5.2c-4.421 0-7.9 3.022-7.9 6.6 0 1.365.5 2.673 1.431 3.78.049.058.12.138.215.236a4 4 0 0 1 1.1 3.102l-.024.297.715-.436a4 4 0 0 1 2.706-.536c.211.033.385.059.52.076.406.054.819.081 1.237.081 4.42 0 7.9-3.022 7.9-6.6 0-.996-.27-1.95-.755-2.807ZM6.193 21.943a1 1 0 0 1-1.527-.932l.189-2.259a2 2 0 0 0-.55-1.551 7.033 7.033 0 0 1-.303-.333C2.806 15.447 2.1 13.695 2.1 11.8c0-4.75 4.432-8.6 9.9-8.6 5.467 0 9.9 3.85 9.9 8.6s-4.433 8.6-9.9 8.6c-.51 0-1.01-.034-1.5-.098-.152-.02-.342-.048-.568-.084a2 2 0 0 0-1.353.268l-2.387 1.456Z" />
    </svg>
  );
};
export { WechatPayLine };
