import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const NoCreditCardLine = (initProps: IconProps) => {
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
    `${prefixCls}-no-credit-card-line`,
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
      <path d="m19.586 21 1.607 1.607 1.414-1.415-19.8-19.799-1.413 1.415.726.726A1 1 0 0 0 2.005 4v16a1 1 0 0 0 1 1zm-2-2H4.005v-7h6.58zm-11-11H4.005V5.419zm15.419-4v13.762l-2-2V12h-3.762l-4-4h7.762V5H9.243l-2-2h13.762a1 1 0 0 1 1 1" />
    </svg>
  );
};
export { NoCreditCardLine };
