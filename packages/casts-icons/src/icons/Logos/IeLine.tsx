import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const IeLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-ie-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M18.16 10a6.003 6.003 0 0 0-11.318 0zM6.584 13a6.002 6.002 0 0 0 11.08 2.057h3.304l-.023.063a9.003 9.003 0 0 1-12.332 5c-2.744 1.49-5.113 1.799-6.422.49-1.344-1.34-.628-4.851 1.313-8.373a23.6 23.6 0 0 1 2.498-3.665q.54-.65 1.126-1.252c-.275.055-1.88.851-3.412 2.714q.087-.389.206-.764a9.004 9.004 0 0 1 9.262-6.244c3.095-1.403 5.974-1.727 7.192-.511 1.125 1.123 1.062 2.995.125 5.242q-.014.032-.027.064a8.96 8.96 0 0 1 1.027 4.18q0 .505-.055 1H6.584m1.422 6.8a9.03 9.03 0 0 1-3.972-4.743c-1.161 2.282-1.46 4.19-.469 5.18.813.812 2.438.624 4.438-.436zM20.173 7.291l.015-.034c.75-1.622.813-2.994.125-3.806-.869-.867-2.54-.75-4.522.168a9.03 9.03 0 0 1 4.382 3.672" />
    </svg>
  );
};
export { IeLine };
