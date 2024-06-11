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
      <path d="M18.16 10a6.003 6.003 0 0 0-11.318 0H18.16ZM6.584 13a6.002 6.002 0 0 0 11.08 2.057h3.304A9.003 9.003 0 0 1 8.613 20.12c-2.744 1.491-5.113 1.8-6.422.492-1.344-1.342-.628-4.852 1.313-8.374a23.625 23.625 0 0 1 2.498-3.665c.36-.433.735-.851 1.126-1.252-.275.055-1.88.851-3.412 2.714a9.004 9.004 0 0 1 9.468-7.009c3.095-1.402 5.974-1.726 7.192-.51 1.125 1.123 1.062 2.995.125 5.242-.01.021-.018.043-.027.064a8.96 8.96 0 0 1 1.027 4.18c0 .337-.019.67-.055 1H6.584Zm1.422 6.8a9.03 9.03 0 0 1-3.972-4.743c-1.161 2.282-1.46 4.19-.469 5.18.813.812 2.438.624 4.438-.436l.003-.002ZM20.173 7.291l.015-.034c.75-1.622.813-2.994.125-3.806-.869-.867-2.54-.75-4.522.168a9.032 9.032 0 0 1 4.382 3.672Z" />
    </svg>
  );
};
export { IeLine };
