import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const PaypalLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-paypal-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M8.496 20.667h1.551l.538-3.376a2.805 2.805 0 0 1 2.77-2.366h.5c2.677 0 4.06-.983 4.55-3.503.208-1.066.117-1.73-.171-2.102-1.207 3.054-3.79 4.16-6.962 4.16h-.884c-.384 0-.793.209-.852.58zm-4.944-.294a.55.55 0 0 1-.544-.637l2.674-16.96A.92.92 0 0 1 6.59 2h6.424c2.213 0 3.942.467 4.9 1.558.869.99 1.122 2.084.87 3.692q.542.285.916.706c.819.933.979 2.26.669 3.85-.741 3.805-3.276 5.12-6.514 5.12h-.5a.805.805 0 0 0-.795.679l-.702 4.383a.804.804 0 0 1-.794.679H6.72a.483.483 0 0 1-.477-.558l.274-1.736zm6.836-8.894h.885c3.189 0 4.894-1.212 5.482-4.229q.03-.15.054-.309c.166-1.06.05-1.553-.399-2.063-.465-.53-1.603-.878-3.396-.878h-5.5L5.247 18.373h1.561l.73-4.628.008.001a2.915 2.915 0 0 1 2.842-2.267" />
    </svg>
  );
};
export { PaypalLine };
