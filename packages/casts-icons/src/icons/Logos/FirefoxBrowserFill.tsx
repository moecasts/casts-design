import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FirefoxBrowserFill = (initProps: IconProps) => {
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
    `${prefixCls}-firefox-browser-fill`,
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
      <path d="M21.283 8.26c-.436-1.047-1.317-2.178-2.01-2.535.48.939.893 2.003 1.017 3.057-1.133-2.823-3.054-3.962-4.622-6.44a8 8 0 0 1-.545-1.013c-2.228 1.305-3.151 3.589-3.388 5.042a5.3 5.3 0 0 0-1.985.507.26.26 0 0 0-.127.318.254.254 0 0 0 .341.147A4.9 4.9 0 0 1 12 6.879c1.805-.013 3.518.99 4.416 2.558-.535-.375-1.493-.746-2.415-.586 3.602 1.801 2.635 8.004-2.357 7.77-2.014-.083-3.945-1.65-4.126-3.73 0 0 .462-1.723 3.31-1.723.309 0 1.189-.86 1.205-1.109-.004-.081-1.747-.775-2.426-1.444-.302-.298-.594-.618-.948-.856a4.64 4.64 0 0 1-.028-2.448c-1.03.469-1.834 1.21-2.416 1.863-.397-.503-.37-2.162-.347-2.508-.873.465-1.642 1.274-2.248 2.137-1.029 1.458-1.622 3.37-1.622 5.182C1.997 17.515 6.468 22 12 22c4.954 0 9.081-3.597 9.887-8.32.241-1.823.107-3.71-.604-5.42" />
    </svg>
  );
};
export { FirefoxBrowserFill };
