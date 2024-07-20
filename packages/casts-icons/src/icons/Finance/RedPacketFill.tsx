import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const RedPacketFill = (initProps: IconProps) => {
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
    `${prefixCls}-red-packet-fill`,
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
      <path d="M21.005 5.94a11.985 11.985 0 0 1-6.806 3.863 2.5 2.5 0 0 0-4.388 0A11.985 11.985 0 0 1 3.005 5.94V3.003a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1V5.94Zm0 2.787v12.276a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V8.727a13.945 13.945 0 0 0 6.63 3.076 2.501 2.501 0 0 0 4.739 0 13.945 13.945 0 0 0 6.63-3.076Z" />
    </svg>
  );
};
export { RedPacketFill };
