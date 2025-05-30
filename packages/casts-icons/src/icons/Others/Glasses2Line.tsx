import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Glasses2Line = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-glasses2-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M3.015 10.988c.03-1.535.11-2.52.34-3.667.331-1.658.954-2.659 2.2-3.489l-1.11-1.664c-1.755 1.17-2.633 2.669-3.051 4.76-.52 2.6-.398 7.936-.395 8.07V15a5 5 0 1 0 9.935-.806c.33-.125.69-.194 1.065-.194.376 0 .734.069 1.065.194a5 5 0 1 0 9.935.806s.132-5.439-.394-8.071c-.419-2.092-1.296-3.591-3.05-4.761l-1.11 1.664c1.245.83 1.867 1.831 2.199 3.49.229 1.145.31 2.131.34 3.666A4.98 4.98 0 0 0 17.998 10a5 5 0 0 0-4.224 2.325A5 5 0 0 0 11.999 12a5 5 0 0 0-1.775.325A5 5 0 0 0 5.999 10a4.98 4.98 0 0 0-2.984.988M3 15a3 3 0 1 1 6 0 3 3 0 0 1-6 0m12.168-.994A3.002 3.002 0 0 1 21 15a3 3 0 1 1-5.832-.994" />
    </svg>
  );
};
export { Glasses2Line };
