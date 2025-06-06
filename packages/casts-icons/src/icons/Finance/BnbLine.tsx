import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const BnbLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-bnb-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m12 20.689-2.01-1.163-.002 2.31L12 23l2.011-1.165-.002-2.309zm4.007-2.32.003 2.31L21.5 17.5v-6.354l-2 1.151v4.05zm3.493-8.38 2-1.151V6.5l-1.996-1.156L17.508 6.5 19.5 7.653zm-3.988-4.645 1.996-1.155L12 1 6.492 4.189l1.996 1.156L12 3.31zM6.492 6.5 4.496 5.345 2.5 6.5v2.338l2 1.152V7.653zM2.5 11.146l2 1.152v4.049l3.492 2.022-.003 2.31L2.5 17.5zm15-2.34-1.988-1.15L12 9.689 8.488 7.656 6.5 8.806v2.335l3.498 2.015-.004 4.06L12 18.378l2.006-1.161L14 13.155l3.499-2.014zM7.995 16.06l.002-1.748-1.497-.862v1.745zM10.483 6.5 12 7.378l1.516-.878L12 5.622zm5.52 7.81 1.497-.861v1.745l-1.495.866z" />
    </svg>
  );
};
export { BnbLine };
