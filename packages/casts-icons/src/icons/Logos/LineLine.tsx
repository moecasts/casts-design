import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const LineLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-line-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M22.001 10.69c0 1.787-.687 3.4-2.123 4.974-2.1 2.414-6.788 5.363-7.864 5.812-1.074.451-.911-.287-.874-.537l.137-.85c.034-.262.068-.65-.032-.9-.112-.277-.556-.424-.881-.492C5.559 18.059 2 14.7 2 10.69c0-4.475 4.487-8.118 10-8.118s10 3.643 10 8.118m-3.6 3.626c1.113-1.22 1.6-2.362 1.6-3.626 0-3.268-3.51-6.118-8-6.118s-8 2.85-8 6.118c0 2.905 2.728 5.507 6.626 6.024l.147.026c1.079.226 1.884.614 2.329 1.708l.037.096c1.805-1.176 4.173-2.979 5.26-4.228m-.262-4.001a.526.526 0 0 1 0 1.05h-1.463v.938h1.463a.525.525 0 1 1 0 1.049H16.15a.526.526 0 0 1-.522-.524V8.852c0-.287.235-.525.525-.525h1.988a.526.526 0 0 1-.002 1.05h-1.463v.938zm-3.213 2.513a.524.524 0 0 1-.526.522.52.52 0 0 1-.425-.208l-2.036-2.764v2.45a.525.525 0 0 1-1.047 0V8.852a.52.52 0 0 1 .52-.523c.162 0 .312.086.412.211l2.052 2.775V8.852c0-.287.235-.525.525-.525.287 0 .525.238.525.525zm-4.784 0a.527.527 0 0 1-.526.524.526.526 0 0 1-.523-.524V8.852c0-.287.235-.525.525-.525.289 0 .524.238.524.525zm-2.055.524H6.098a.53.53 0 0 1-.525-.524V8.852c0-.287.238-.525.525-.525.29 0 .525.238.525.525v3.45h1.464a.525.525 0 0 1 0 1.05" />
    </svg>
  );
};
export { LineLine };
