import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const CloudOffLine = (initProps: IconProps) => {
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
    `${prefixCls}-cloud-off-line`,
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
      <path d="m3.515 2.1 19.092 19.092-1.415 1.415-2.014-2.015A6 6 0 0 1 17 21H7A6 6 0 0 1 5.008 9.339a6.992 6.992 0 0 1 .353-2.563L2.1 3.514zM7 9q0 .122.006.243l.07 1.488-1.404.494A4.002 4.002 0 0 0 7 19h10q.28 0 .548-.037L7.03 8.445Q7 8.718 7 9m5-7a7 7 0 0 1 6.992 7.339 6.003 6.003 0 0 1 3.212 8.65l-1.493-1.494a3.999 3.999 0 0 0-5.207-5.206L14.01 9.796C14.891 9.29 15.911 9 17 9a5 5 0 0 0-7.876-4.09l-1.43-1.43A6.97 6.97 0 0 1 12 2" />
    </svg>
  );
};
export { CloudOffLine };
