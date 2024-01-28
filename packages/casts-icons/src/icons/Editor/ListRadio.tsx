import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ListRadio = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-list-radio`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M8.5 7a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm2 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM21 4h-8v2h8V4Zm0 7h-8v2h8v-2Zm0 7h-8v2h8v-2ZM6.5 19a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </svg>
  );
};
export { ListRadio };
