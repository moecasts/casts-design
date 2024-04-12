import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const CalendarCloseLine = (initProps: IconProps) => {
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
    `${prefixCls}-calendar-close-line`,
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
      <path d="M9 3V1H7v2H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4V1h-2v2H9Zm-5 7h16v9H4v-9Zm0-5h3v1h2V5h6v1h2V5h3v3H4V5Zm5.879 5.964L12 13.086l2.121-2.122 1.415 1.415-2.122 2.121 2.121 2.121-1.414 1.414L12 15.915l-2.121 2.12-1.415-1.414 2.122-2.12-2.122-2.122 1.415-1.415Z" />
    </svg>
  );
};
export { CalendarCloseLine };
