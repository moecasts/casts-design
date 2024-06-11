import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FilePdf2Fill = (initProps: IconProps) => {
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
    `${prefixCls}-file-pdf2-fill`,
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
      <path d="M3.998 2A.995.995 0 0 0 3 2.992v18.016a1 1 0 0 0 .993.992h16.014A1 1 0 0 0 21 20.992V7l-5-5H3.998ZM10.5 7.5h2c0 2.49 2.144 5.16 4.816 6.051l-.457 1.939c-3.136-.448-6.377.89-9.304 2.842l-1.18-1.613c1.086-.869 2.128-2.343 2.9-4.066.77-1.716 1.225-3.576 1.225-5.153Zm.6 5.972c.267-.597.504-1.216.704-1.843a9.66 9.66 0 0 0 1.706 1.966c-.982.176-1.943.465-2.875.833.165-.314.32-.633.465-.956Z" />
    </svg>
  );
};
export { FilePdf2Fill };
