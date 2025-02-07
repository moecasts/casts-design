import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const CollageFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-collage-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m11.189 13.264 1.383 7.842H4a1 1 0 0 1-1-1V14.71zM20 3.107a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1l-5.398-.001-3.174-18zM9.398 3.106l1.444 8.188L3 12.679V4.107a1 1 0 0 1 1-1z" />
    </svg>
  );
};
export { CollageFill };
