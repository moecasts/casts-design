import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FilePdf2Line = (initProps: IconProps) => {
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
    `${prefixCls}-file-pdf2-line`,
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
      <path d="M5 4h10v4h4v12H5zM3.999 2A.995.995 0 0 0 3 2.992v18.016a1 1 0 0 0 .993.992h16.014A1 1 0 0 0 21 20.992V7l-5-5zm6.5 5.5c0 1.577-.455 3.437-1.224 5.153-.772 1.723-1.814 3.197-2.9 4.066l1.18 1.613c2.927-1.952 6.168-3.29 9.304-2.842l.457-1.939C14.644 12.661 12.5 9.99 12.5 7.5zm.6 5.972c.268-.597.505-1.216.705-1.843a9.7 9.7 0 0 0 1.706 1.966c-.982.176-1.944.465-2.875.833q.248-.471.465-.956" />
    </svg>
  );
};
export { FilePdf2Line };
