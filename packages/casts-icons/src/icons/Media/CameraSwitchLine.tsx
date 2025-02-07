import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const CameraSwitchLine = (initProps: IconProps) => {
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
    `${prefixCls}-camera-switch-line`,
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
      <path d="m9.828 5-2 2H4v12h16V7h-3.828l-2-2zM9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zm.64 4.53a5.5 5.5 0 0 1 6.187 8.92L13.75 12.6h1.749l.001-.1a3.5 3.5 0 0 0-4.928-3.196zm4.678 9.96a5.5 5.5 0 0 1-6.18-8.905L10.25 12.5H8.5a3.5 3.5 0 0 0 4.886 3.215z" />
    </svg>
  );
};
export { CameraSwitchLine };
