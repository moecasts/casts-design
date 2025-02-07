import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const CreativeCommonsZeroLine = (initProps: IconProps) => {
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
    `${prefixCls}-creative-commons-zero-line`,
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
      <path d="M17 12c0-3.314-2.238-6-5-6s-5 2.686-5 6 2.239 6 5 6 5-2.686 5-6m-6.237 3.645 3.562-6.173c.422.69.675 1.57.675 2.528 0 2.21-1.343 4-3 4-.441 0-.86-.127-1.237-.355M9 12c0-2.21 1.343-4 3-4 .441 0 .86.127 1.237.355l-3.562 6.173C9.253 13.838 9 12.958 9 12m3-10a9.97 9.97 0 0 0-7.07 2.93A9.97 9.97 0 0 0 2 12a9.97 9.97 0 0 0 2.93 7.07A9.97 9.97 0 0 0 12 22a9.97 9.97 0 0 0 7.07-2.93A9.97 9.97 0 0 0 22 12a9.97 9.97 0 0 0-2.93-7.07A9.97 9.97 0 0 0 12 2M6.344 6.344A7.97 7.97 0 0 1 12 4c2.208 0 4.206.895 5.656 2.344A7.97 7.97 0 0 1 20 12a7.97 7.97 0 0 1-2.344 5.656A7.97 7.97 0 0 1 12 20a7.97 7.97 0 0 1-5.656-2.344A7.97 7.97 0 0 1 4 12c0-2.208.895-4.206 2.344-5.656" />
    </svg>
  );
};
export { CreativeCommonsZeroLine };
