import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const YuqueFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-yuque-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M17.28 2.955c2.97.203 3.756 2.342 3.84 2.597l1.297.096c.13 0 .169.18.054.236-1.323.716-1.727 2.17-1.49 3.118.09.358.254.69.412 1.02.307.642.651 1.418.707 2.981.117 3.24-2.51 6.175-5.789 6.593 1.17-1.187 1.815-2.444 2.12-3.375.606-1.846.508-3.316.055-4.44a4.46 4.46 0 0 0-1.782-2.141c-1.683-1.02-3.22-1.09-4.444-.762.465-.594.876-1.201 1.2-1.864.584-1.65-.102-2.848-.704-3.519-.192-.246-.061-.655.305-.655 1.41 0 2.813.02 4.22.115M3.32 19.107c1.924-2.202 4.712-5.394 7.162-8.15.559-.63 2.769-2.338 5.748-.533.878.532 2.43 2.165 1.332 5.51-.803 2.446-4.408 7.796-15.76 5.844-.227-.039-.511-.354-.218-.687z" />
    </svg>
  );
};
export { YuqueFill };
