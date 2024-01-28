import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const SofaFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-sofa-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M15 3H9a6.002 6.002 0 0 0-5.92 5.02A4.5 4.5 0 0 1 8 12.5V14h8v-1.5a4.5 4.5 0 0 1 4.92-4.48A6.002 6.002 0 0 0 15 3Zm6 7.05a2.5 2.5 0 0 0-3 2.45V17h-2v-1H8v1H6v-4.5a2.5 2.5 0 0 0-5 0c0 .589.182 1.039.39 1.555.28.696.61 1.51.61 2.945v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-3c0-1.434.33-2.25.61-2.945.208-.516.39-.966.39-1.555a2.5 2.5 0 0 0-2-2.45Z" />
    </svg>
  );
};
export { SofaFill };
