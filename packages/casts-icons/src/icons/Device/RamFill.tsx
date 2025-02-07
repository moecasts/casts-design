import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const RamFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-ram-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M2 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h3a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm3 4h6v3H5zm8 0h6v3h-6z" />
    </svg>
  );
};
export { RamFill };
