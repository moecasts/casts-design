import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const MessengerFill = (initProps: IconProps) => {
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
    `${prefixCls}-messenger-fill`,
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
      <path d="M12.001 2c5.633 0 10 4.127 10 9.7 0 5.573-4.367 9.7-10 9.7a10.893 10.893 0 0 1-2.895-.384.8.8 0 0 0-.534.039l-1.985.876a.8.8 0 0 1-1.123-.707l-.054-1.78a.797.797 0 0 0-.269-.57c-1.945-1.74-3.14-4.258-3.14-7.174 0-5.573 4.366-9.7 10-9.7ZM5.996 14.537c-.282.447.268.951.689.631l3.155-2.394a.6.6 0 0 1 .723 0l2.336 1.75a1.5 1.5 0 0 0 2.17-.4l2.937-4.66c.282-.448-.268-.952-.689-.633l-3.155 2.396a.6.6 0 0 1-.723 0l-2.337-1.75a1.5 1.5 0 0 0-2.169.4l-2.937 4.66Z" />
    </svg>
  );
};
export { MessengerFill };
