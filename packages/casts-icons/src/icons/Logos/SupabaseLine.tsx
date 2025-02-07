import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const SupabaseLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-supabase-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M11 2.598V13.97H3.9c-.67 0-1.07-.784-.643-1.336zm2 5.433V2.333c0-1.811-2.297-2.624-3.418-1.171L1.673 11.41C.246 13.26 1.548 15.969 3.9 15.969H11v5.698c0 1.811 2.296 2.624 3.418 1.171l7.908-10.249c1.427-1.849.126-4.558-2.227-4.558zm0 2h7.1c.669 0 1.069.784.643 1.336L13 21.402z" />
    </svg>
  );
};
export { SupabaseLine };
