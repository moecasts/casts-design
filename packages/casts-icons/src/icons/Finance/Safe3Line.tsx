import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Safe3Line = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-safe3-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-1v2h-2v-2H6v2H4v-2H3a1 1 0 0 1-1-1zm2 14h16V5H4zm11.35-9.764a3.76 3.76 0 0 0-3.7 0l-1.332-1.332-1.414 1.414 1.333 1.333a3.76 3.76 0 0 0 0 3.698l-1.333 1.333 1.414 1.414 1.333-1.333a3.76 3.76 0 0 0 3.698 0l1.333 1.333 1.414-1.414-1.333-1.333a3.76 3.76 0 0 0 0-3.698l1.333-1.333-1.414-1.414zm-.613 2.026a1.75 1.75 0 1 1-2.474 2.475 1.75 1.75 0 0 1 2.474-2.475M5 8v7h2V8z" />
    </svg>
  );
};
export { Safe3Line };
