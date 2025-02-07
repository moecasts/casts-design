import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ClosedCaptioningLine = (initProps: IconProps) => {
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
    `${prefixCls}-closed-captioning-line`,
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
      <path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2H4v14h16zM9 8c1.104 0 2.105.448 2.829 1.173l-1.414 1.414a2 2 0 1 0 0 2.828l1.413 1.413A4.001 4.001 0 0 1 5 12c0-2.208 1.792-4 4-4m7 0c1.105 0 2.105.448 2.829 1.173l-1.414 1.414a2 2 0 1 0 0 2.828l1.413 1.413A4.001 4.001 0 0 1 12 12c0-2.208 1.792-4 4-4" />
    </svg>
  );
};
export { ClosedCaptioningLine };
