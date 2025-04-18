import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const LifebuoyFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-lifebuoy-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2M7.197 14.682l-2.175 2.173a8.6 8.6 0 0 0 1.818 1.9l.305.223 2.173-2.175a5.5 5.5 0 0 1-1.98-1.883zm9.606 0a5.5 5.5 0 0 1-1.883 1.98l-.238.14 2.173 2.176a8.6 8.6 0 0 0 1.9-1.818l.223-.305zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8M7.145 5.022a8.6 8.6 0 0 0-1.9 1.818l-.223.305 2.175 2.173a5.5 5.5 0 0 1 1.883-1.98l.238-.14zm9.71 0-2.173 2.175a5.5 5.5 0 0 1 1.98 1.883l.14.238 2.176-2.173a8.6 8.6 0 0 0-1.818-1.9z" />
    </svg>
  );
};
export { LifebuoyFill };
