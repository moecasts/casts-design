import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const InfinityLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-infinity-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M3 12a3.5 3.5 0 0 1 3.5-3.5c1.204 0 2.02.434 2.7 1.113.726.727 1.285 1.72 1.926 2.873l.034.06c.6 1.082 1.283 2.311 2.227 3.255 1.008 1.008 2.316 1.699 4.113 1.699a5.5 5.5 0 1 0-4.158-9.1 24 24 0 0 1 1.122 1.857A3.5 3.5 0 1 1 17.5 15.5c-1.203 0-2.02-.434-2.7-1.113-.726-.727-1.285-1.72-1.926-2.873l-.034-.06c-.6-1.082-1.283-2.311-2.227-3.255C9.605 7.191 8.297 6.5 6.5 6.5a5.5 5.5 0 1 0 4.158 9.1 24 24 0 0 1-1.122-1.857A3.5 3.5 0 0 1 3 12" />
    </svg>
  );
};
export { InfinityLine };
