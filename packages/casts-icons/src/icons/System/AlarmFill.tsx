import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const AlarmFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-alarm-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M12 22a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm1-9V8h-2v7h5v-2h-3ZM1.747 6.283l3.536-3.536 1.414 1.414L3.16 7.697 1.747 6.283Zm16.97-3.536 3.536 3.536-1.414 1.414-3.536-3.536 1.415-1.414Z" />
    </svg>
  );
};
export { AlarmFill };
