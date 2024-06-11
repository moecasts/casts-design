import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FinderFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-finder-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M21.001 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18Zm-1 2h-8.465c-.69 1.977-1.035 4.644-1.035 8h3a17.15 17.15 0 0 0-.107 2.877c1.226-.211 2.704-.777 4.027-1.71l1.135 1.665c-1.642 1.095-3.303 1.779-4.976 2.043.052.37.113.745.184 1.125h6.237V5ZM6.556 14.168l-1.11 1.664C7.603 17.27 9.793 18 12.001 18v-2c-1.792 0-3.602-.603-5.445-1.832ZM17 7a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Zm-10 0c-.552 0-1 .452-1 1v1a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1Z" />
    </svg>
  );
};
export { FinderFill };
