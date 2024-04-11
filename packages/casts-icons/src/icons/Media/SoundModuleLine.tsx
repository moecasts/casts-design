import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const SoundModuleLine = (initProps: IconProps) => {
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
    `${prefixCls}-sound-module-line`,
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
      <path d="M21 18v3h-2v-3h-2v-2h6v2h-2ZM5 18v3H3v-3H1v-2h6v2H5Zm6-12V3h2v3h2v2H9V6h2Zm0 4h2v11h-2V10Zm-8 4V3h2v11H3Zm16 0V3h2v11h-2Z" />
    </svg>
  );
};
export { SoundModuleLine };
