import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const SortNumberDesc = (initProps: IconProps) => {
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
    `${prefixCls}-sort-number-desc`,
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
      <path d="M9 11V3H7.314L5 3.62v2.329l2-.539V11h2Zm13-3-4-5-4 5h3v13h2V8h3ZM8 16.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm2.573.544a3 3 0 1 0-3.121 1.406L5.979 21h2.31l2.284-3.956Z" />
    </svg>
  );
};
export { SortNumberDesc };
