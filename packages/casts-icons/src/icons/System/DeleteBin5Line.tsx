import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const DeleteBin5Line = (initProps: IconProps) => {
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
    `${prefixCls}-delete-bin5-line`,
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
      <path d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm2 2v10h12V10zm3 2h2v6H9zm4 0h2v6h-2zM7 5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5zm2-1v1h6V4z" />
    </svg>
  );
};
export { DeleteBin5Line };
