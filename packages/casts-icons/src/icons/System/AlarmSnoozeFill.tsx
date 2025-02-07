import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const AlarmSnoozeFill = (initProps: IconProps) => {
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
    `${prefixCls}-alarm-snooze-fill`,
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
      <path d="M3 13a9 9 0 1 0 18 0 9 9 0 0 0-18 0M5.283 2.747 1.747 6.283l1.414 1.414L6.697 4.16zm16.97 3.536-3.535-3.536-1.415 1.414 3.536 3.536zM9 11V9h6v2.414L11.414 15H15v2H9v-2.414L12.586 11z" />
    </svg>
  );
};
export { AlarmSnoozeFill };
