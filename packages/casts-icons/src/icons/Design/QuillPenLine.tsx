import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const QuillPenLine = (initProps: IconProps) => {
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
    `${prefixCls}-quill-pen-line`,
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
      <path d="M6.94 14.033a30 30 0 0 0-.606 1.783c.96-.697 2.101-1.14 3.418-1.304 2.513-.314 4.746-1.973 5.876-4.058l-1.456-1.455 1.413-1.415 1-1.002c.43-.429.915-1.224 1.428-2.367-5.593.867-9.018 4.291-11.074 9.818M17 8.997l1 1c-1 3-4 6-8 6.5q-4.003.5-5.002 5.5H3c1-6 3-20 18-20q-1.5 4.496-2.997 5.997z" />
    </svg>
  );
};
export { QuillPenLine };
