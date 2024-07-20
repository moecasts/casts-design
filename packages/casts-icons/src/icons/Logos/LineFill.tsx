import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const LineFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-line-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M18.663 10.84a.526.526 0 0 1-.524.525h-1.463v.938h1.463a.525.525 0 1 1 0 1.049H16.15a.526.526 0 0 1-.522-.524V8.852c0-.287.235-.525.525-.525h1.988a.526.526 0 0 1-.002 1.05h-1.463v.938h1.463c.29 0 .524.237.524.525Zm-4.097 2.485a.54.54 0 0 1-.166.025.515.515 0 0 1-.425-.208l-2.036-2.764v2.45a.525.525 0 0 1-1.047 0V8.852a.522.522 0 0 1 .52-.523c.162 0 .312.086.412.211l2.052 2.775V8.852c0-.287.235-.525.525-.525.287 0 .525.238.525.525v3.976a.524.524 0 0 1-.36.497Zm-4.95.027a.526.526 0 0 1-.523-.524V8.852c0-.287.235-.525.525-.525.289 0 .524.238.524.525v3.976a.527.527 0 0 1-.526.524Zm-1.53 0H6.099a.528.528 0 0 1-.525-.524V8.852c0-.287.238-.525.525-.525.29 0 .525.238.525.525v3.45h1.464a.525.525 0 0 1 0 1.05Zm3.915-10.78c-5.513 0-10 3.643-10 8.118 0 4.01 3.558 7.369 8.363 8.007.325.068.769.215.881.492.1.25.066.638.032.9l-.137.85c-.037.25-.2.988.874.537 1.076-.449 5.764-3.398 7.864-5.812C21.314 14.089 22 12.477 22 10.69c0-4.475-4.488-8.118-10-8.118Z" />
    </svg>
  );
};
export { LineFill };
