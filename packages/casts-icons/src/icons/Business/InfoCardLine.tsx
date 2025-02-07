import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const InfoCardLine = (initProps: IconProps) => {
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
    `${prefixCls}-info-card-line`,
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
      <path d="M3 6h18v12H3zM2 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm11 5h6v2h-6zm5 4h-5v2h5zM6 13h1v3h2v-5H6zm3-5H7v2h2z" />
    </svg>
  );
};
export { InfoCardLine };
