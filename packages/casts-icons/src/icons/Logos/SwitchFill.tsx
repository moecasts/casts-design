import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const SwitchFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-switch-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M13.62 21c-.085 0-.141-.057-.127-.127V3.127c0-.056.042-.113.113-.113h2.785a4.61 4.61 0 0 1 4.61 4.61v8.766a4.61 4.61 0 0 1-4.61 4.61H13.62Zm3.422-9.926c-1.004 0-1.824.82-1.824 1.824s.82 1.824 1.824 1.824 1.824-.82 1.824-1.824-.82-1.824-1.824-1.824ZM5.8 8.4c0-.933.763-1.696 1.696-1.696.934 0 1.697.763 1.697 1.696 0 .934-.763 1.697-1.697 1.697a1.702 1.702 0 0 1-1.696-1.697ZM11.54 3c.085 0 .142.057.128.127V20.86c0 .07-.057.127-.128.127h-3.93A4.61 4.61 0 0 1 3 16.376V7.61A4.61 4.61 0 0 1 7.611 3h3.93Zm-1.315 16.544V4.442H7.611c-.849 0-1.64.34-2.235.933a3.088 3.088 0 0 0-.933 2.235v8.766c0 .849.34 1.64.933 2.234a3.088 3.088 0 0 0 2.235.934h2.615Z" />
    </svg>
  );
};
export { SwitchFill };
