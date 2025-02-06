import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const BrainFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-brain-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M11 2.535A4 4 0 0 0 5 6v1.774c-.851.342-1.549.874-2.059 1.575C2.292 10.242 2 11.335 2 12.5c0 1.561.795 2.936 2 3.742V17.5a4.5 4.5 0 0 0 7 3.742V17.5c0-1.333-.33-2.185-.86-2.76-.543-.587-1.424-1.024-2.804-1.254l.328-1.972c1.302.216 2.442.623 3.336 1.313zm2 0v10.292c.894-.69 2.034-1.097 3.336-1.313l.328 1.972c-1.38.23-2.261.667-2.804 1.255-.53.574-.86 1.426-.86 2.759v3.742a4.5 4.5 0 0 0 7-3.742v-1.258c1.205-.806 2-2.18 2-3.742 0-1.165-.292-2.258-.941-3.15-.51-.702-1.208-1.234-2.059-1.576V6a4 4 0 0 0-6-3.465" />
    </svg>
  );
};
export { BrainFill };
