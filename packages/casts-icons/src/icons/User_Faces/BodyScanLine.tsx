import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const BodyScanLine = (initProps: IconProps) => {
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
    `${prefixCls}-body-scan-line`,
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
      <path d="M4 16v4h4v2H2v-6h2Zm18 0v6h-6v-2h4v-4h2ZM7.5 7a4.502 4.502 0 0 0 3.5 4.389V17h2l.001-5.612A4.502 4.502 0 0 0 16.5 7h2a6.5 6.5 0 0 1-3.499 5.767L15 19H9v-6.232A6.5 6.5 0 0 1 5.5 7h2ZM12 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM8 2v2l-4-.001V8H2V2h6Zm14 0v6h-2V4h-4V2h6Z" />
    </svg>
  );
};
export { BodyScanLine };
