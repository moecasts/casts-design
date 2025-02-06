import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ChessFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-chess-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M5 16h12.808c-.398-1.815-1.465-3.147-3.66-4.088a.46.46 0 0 1-.263-.568.45.45 0 0 1 .476-.303l4.485.51a1 1 0 0 0 .98-.498l.827-1.445a1 1 0 0 0-.105-1.142L15.5 2.5V.287C9.336 2.84 5 8.913 5 16m-1 1h15v3h1v2H3v-2h1zM15 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    </svg>
  );
};
export { ChessFill };
