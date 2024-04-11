import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const SortAlphabetDesc = (initProps: IconProps) => {
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
    `${prefixCls}-sort-alphabet-desc`,
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
      <path d="M4.869 11H2.667L6 3h2l3.333 8H9.131l-.41-1H5.28l-.41 1Zm1.23-3h1.803L7 5.8 6.098 8Zm15.9 0-4-5-4 5h3v13h2V8h3Zm-11 5H3v2h4.855L3 19v2h8v-2H6.146L11 15v-2Z" />
    </svg>
  );
};
export { SortAlphabetDesc };
