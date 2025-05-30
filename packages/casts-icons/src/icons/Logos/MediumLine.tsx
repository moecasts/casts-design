import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const MediumLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-medium-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M6.158 4h11.684C19.034 4 20 4.966 20 6.158v3.455a2.914 2.914 0 0 0-1.539 1.003c-.472.586-.758 1.377-.828 2.266q-.022.266-.017.532c.041 1.763.88 3.216 2.384 3.55v.878A2.16 2.16 0 0 1 17.842 20H6.158A2.16 2.16 0 0 1 4 17.842V6.158C4 4.966 4.966 4 6.158 4M21 6.158A3.16 3.16 0 0 0 17.842 3H6.158A3.16 3.16 0 0 0 3 6.158v11.684A3.16 3.16 0 0 0 6.158 21h11.684A3.16 3.16 0 0 0 21 17.842zm-1 4.14v1.983h-.616c.039-.867.253-1.58.616-1.983m0 2.364v2.063c-.441-.513-.699-1.25-.653-2.063zM17.697 7.3l.015-.003v-.11h-2.9l-2.69 6.326L9.43 7.187H6.306v.11l.014.003c.529.12.798.298.798.94v7.52c0 .642-.27.82-.8.94l-.013.002v.11h2.12v-.11L8.41 16.7c-.529-.12-.798-.298-.798-.94V8.676l3.458 8.137h.196l3.559-8.364v7.496c-.046.508-.312.665-.791.773l-.014.003v.109h3.692v-.11l-.015-.002c-.48-.108-.752-.265-.797-.773l-.003-7.705h.003c0-.642.269-.82.797-.94" />
    </svg>
  );
};
export { MediumLine };
