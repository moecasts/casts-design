import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const IeFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-ie-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M8.613 20.12c-2.744 1.49-5.113 1.799-6.422.49-1.344-1.34-.628-4.851 1.313-8.373A23.2 23.2 0 0 1 7.128 7.32c.187-.187 1.125-1.123 1.187-1.123 0 0-.5.312-.562.312-1.95 1.095-3.663 3.08-4.037 3.525q.087-.389.206-.764a9.004 9.004 0 0 1 9.262-6.244c3.095-1.403 5.974-1.727 7.192-.511 1.125 1.123 1.062 2.995.125 5.242q-.014.032-.027.064a8.96 8.96 0 0 1 1.027 4.18q0 .567-.07 1.12h-.804l-.142.002H8.69v.187c.062 1.997 1.812 3.744 3.937 3.744 1.5 0 2.937-.811 3.562-1.997h4.78l-.024.063a9.003 9.003 0 0 1-12.332 5m-.607-.32a9.03 9.03 0 0 1-3.972-4.743c-1.161 2.282-1.46 4.19-.469 5.18.813.812 2.438.624 4.438-.436zM20.173 7.291l.015-.034c.75-1.622.813-2.994.125-3.806-.869-.867-2.54-.75-4.522.168a9.03 9.03 0 0 1 4.382 3.672m-3.609 3.461v-.062c-.125-2.06-1.75-3.62-3.75-3.62-2.125 0-3.936 1.685-4.061 3.62v.062z" />
    </svg>
  );
};
export { IeFill };
