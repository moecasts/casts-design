import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const SwordFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-sword-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m7.048 13.406 3.535 3.536-1.413 1.414 1.415 1.415-1.414 1.414-2.475-2.475-2.829 2.829-1.414-1.414 2.829-2.83-2.475-2.474 1.414-1.414 1.414 1.413 1.413-1.414ZM3 3l3.546.003 11.817 11.818 1.415-1.414 1.415 1.414-2.475 2.475 2.828 2.829-1.414 1.414-2.829-2.829-2.474 2.475-1.415-1.414 1.414-1.415L3.002 6.531 2.999 3Zm14.457 0L21 3.003l.002 3.523-4.053 4.052-3.536-3.535L17.456 3Z" />
    </svg>
  );
};
export { SwordFill };
