import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ChatThreadLine = (initProps: IconProps) => {
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
    `${prefixCls}-chat-thread-line`,
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
      <path d="m2 22 5.291-1.176A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.703.425 3.306 1.176 4.709zm6.234-2.94-.653-.349-2.947.655.655-2.947-.35-.653A7.96 7.96 0 0 1 4 12a8 8 0 1 1 8 8 7.96 7.96 0 0 1-3.766-.94M15.45 7H13.44l-.175 2h-2.008l.175-2H9.426L9.25 9H7v2h2.076L8.9 13H7v2h1.726l-.175 2h2.008l.175-2h2.007l-.175 2h2.008l.175-2H17v-2h-2.076l.175-2H17V9h-1.726zm-4.366 4h2.008l-.175 2h-2.008z" />
    </svg>
  );
};
export { ChatThreadLine };
