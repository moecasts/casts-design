import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Haze2Line = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-haze2-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M12 19a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm7.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-15 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM17 7a5 5 0 0 1 0 10c-1.844 0-3.51-1.04-5-3.121C10.51 15.959 8.844 17 7 17A5 5 0 0 1 7 7c1.844 0 3.51 1.04 5 3.121C13.49 8.041 15.156 7 17 7ZM7 9a3 3 0 1 0 0 6c1.254 0 2.51-.875 3.759-2.854l.089-.147-.09-.145c-1.197-1.896-2.4-2.78-3.601-2.85L7 9Zm10 0c-1.254 0-2.51.875-3.759 2.854l-.09.146.09.146c1.198 1.896 2.4 2.78 3.602 2.85L17 15a3 3 0 1 0 0-6Zm-5-7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM4.5 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm15 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
    </svg>
  );
};
export { Haze2Line };
