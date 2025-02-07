import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FirebaseLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-firebase-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m9.223 8.707-2.312 4.334 1.09-6.715zm1.145-2.148L7.695 1.353a.5.5 0 0 0-.938.148L4 18.5l1.748 1.093 5.192 3.244a2 2 0 0 0 2.12 0L20 18.5 18.142 5.961a.5.5 0 0 0-.841-.287l-2.735 2.637-2.125-3.984a.5.5 0 0 0-.882 0zm2.701 3.196L8.667 14 12 7.75zm-5.837 8.407 9.36-9.025 1.238 8.36L12 21.143z" />
    </svg>
  );
};
export { FirebaseLine };
