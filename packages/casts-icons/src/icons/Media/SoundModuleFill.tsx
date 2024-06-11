import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const SoundModuleFill = (initProps: IconProps) => {
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
    `${prefixCls}-sound-module-fill`,
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
      <path d="M21 18v3h-2v-3h-2v-3h6v3h-2ZM5 18v3H3v-3H1v-3h6v3H5Zm6-12V3h2v3h2v3H9V6h2Zm0 5h2v10h-2V11Zm-8 2V3h2v10H3Zm16 0V3h2v10h-2Z" />
    </svg>
  );
};
export { SoundModuleFill };
