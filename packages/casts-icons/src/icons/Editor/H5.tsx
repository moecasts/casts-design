import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const H5 = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-h5`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M22 8v2h-4.323l-.464 2.636A4.006 4.006 0 0 1 22.25 16.5a4 4 0 0 1-7.846 1.103l1.923-.551a2 2 0 1 0 .363-1.804l-1.81-.904L16 8h6ZM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2Z" />
    </svg>
  );
};
export { H5 };
