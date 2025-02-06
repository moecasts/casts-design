import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const AlignItemVerticalCenterLine = (initProps: IconProps) => {
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
    `${prefixCls}-align-item-vertical-center-line`,
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
      <path d="M9 18V6H6v12zm-4 2a1 1 0 0 1-1-1v-6H2v-2h2V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6h2V7a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4h2v2h-2v4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4h-2v6a1 1 0 0 1-1 1zm10-4h3V8h-3z" />
    </svg>
  );
};
export { AlignItemVerticalCenterLine };
