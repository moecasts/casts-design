import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const AmazonFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-amazon-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M21.997 18.23c0 .727-.405 2.127-1.315 2.896-.182.14-.364.061-.284-.143.265-.648.871-2.147.587-2.492-.201-.262-1.031-.242-1.739-.182-.323.041-.607.06-.827.105-.204.016-.245-.163-.041-.303a3.09 3.09 0 0 1 .87-.428c1.15-.344 2.479-.137 2.67.083.036.042.079.16.079.463Zm-1.922 1.294a7.426 7.426 0 0 1-.829.55c-2.122 1.275-4.871 1.943-7.258 1.943-3.843 0-7.28-1.417-9.888-3.788-.224-.182-.039-.446.223-.303 2.81 1.64 6.288 2.632 9.888 2.632 2.266 0 4.708-.424 7.035-1.336.163-.061.345-.144.504-.202.367-.165.69.242.325.504Zm-6.17-11.03c0-1.041.042-1.654-.303-2.18-.306-.433-.833-.693-1.569-.652-.798.044-1.655.567-1.873 1.526-.043.22-.171.436-.437.483l-2.435-.31c-.174-.04-.439-.173-.352-.521C7.459 4.088 9.81 3.129 12.034 3h.522c1.22 0 2.788.349 3.791 1.264 1.217 1.136 1.087 2.662 1.087 4.32v3.927c0 1.178.478 1.7.958 2.314.13.219.175.477-.044.655a77.915 77.915 0 0 1-1.917 1.654c-.175.133-.489.147-.61.045-.77-.645-.958-1.003-1.435-1.658-.83.871-1.527 1.352-2.356 1.613a7.038 7.038 0 0 1-1.784.216c-2.09 0-3.745-1.303-3.745-3.88 0-2.049 1.09-3.442 2.7-4.101 1.61-.66 3.95-.87 4.704-.874Zm-.477 5.192c.52-.872.477-1.586.477-3.185-.652 0-1.306.045-1.871.178-1.045.303-1.875.96-1.875 2.355 0 1.09.568 1.832 1.526 1.832.132 0 .248-.016.348-.045.67-.186 1.088-.522 1.395-1.135Z" />
    </svg>
  );
};
export { AmazonFill };
