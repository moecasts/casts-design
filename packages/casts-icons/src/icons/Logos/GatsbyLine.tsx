import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const GatsbyLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-gatsby-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M11.752 21.997c-5.221-.128-9.45-4.257-9.736-9.438l-.012-.313 9.748 9.751ZM12 2a9.988 9.988 0 0 1 8.193 4.265l-1.638 1.148A8.003 8.003 0 0 0 4.535 9.12L14.88 19.466A8.018 8.018 0 0 0 19.749 14H15.5v-2H22c0 4.726-3.279 8.686-7.686 9.73L2.27 9.686C3.314 5.28 7.275 2 12 2Z" />
    </svg>
  );
};
export { GatsbyLine };
