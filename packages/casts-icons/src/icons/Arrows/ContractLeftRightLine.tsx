import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ContractLeftRightLine = (initProps: IconProps) => {
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
    `${prefixCls}-contract-left-right-line`,
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
      <path d="M18.793 5.793 12.586 12l6.207 6.207 1.414-1.414L15.414 12l4.793-4.793-1.414-1.414ZM5.207 18.207 11.414 12 5.207 5.793 3.793 7.207 8.586 12l-4.793 4.793 1.414 1.414Z" />
    </svg>
  );
};
export { ContractLeftRightLine };
