import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Apps2AddFill = (initProps: IconProps) => {
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
    `${prefixCls}-apps2-add-fill`,
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
      <path d="M2.5 7a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m0 10a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m10 0a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m3.5-6V8h-3V6h3V3h2v3h3v2h-3v3z" />
    </svg>
  );
};
export { Apps2AddFill };
