import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const BellFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-bell-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m13.414 10.586.48.486.464.485.46.492c3.458 3.764 5.472 7.218 4.607 8.083-.4.4-1.356.184-2.64-.507a9.01 9.01 0 0 1-10.403-.592l2.98-2.98a2 2 0 1 0-1.45-1.569l.035.155-2.979 2.98a9.01 9.01 0 0 1-.592-10.405c-.692-1.283-.908-2.238-.508-2.639.977-.976 5.25 1.715 9.546 6.01m6.364-6.364a2 2 0 0 1-.165 2.976 9.02 9.02 0 0 1 .608 8.47c-1.189-1.954-3.07-4.173-5.393-6.496l-.537-.532c-2.128-2.078-4.156-3.764-5.958-4.86a9.02 9.02 0 0 1 8.471.607q.066-.086.146-.165a2 2 0 0 1 2.828 0" />
    </svg>
  );
};
export { BellFill };
