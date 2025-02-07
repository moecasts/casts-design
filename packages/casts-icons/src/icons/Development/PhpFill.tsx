import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const PhpFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-php-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M4.931 9.46H3.594l-.73 3.751h1.187q1.181 0 1.76-.445.577-.445.779-1.486.194-.999-.176-1.41t-1.483-.41m2.45 4.153c-.369.354-.814.62-1.298.78q-.715.232-1.82.233H2.588l-.463 2.382H.174l1.742-8.962H5.67q1.694 0 2.471.89.778.888.468 2.482c-.08.42-.225.825-.432 1.2a4 4 0 0 1-.795.995m5.701 1.013.77-3.965c.089-.45.055-.76-.097-.922q-.227-.247-.973-.247h-1.547l-.997 5.136H8.3l1.742-8.964h1.937l-.463 2.383h1.725q1.63 0 2.247.568t.373 1.84l-.81 4.171zm10.763-3.208c-.078.42-.224.825-.432 1.2a4 4 0 0 1-.795.995c-.37.353-.814.62-1.299.78q-.715.232-1.822.233h-1.671l-.464 2.383H15.41l1.743-8.962h3.752q1.694 0 2.471.89.778.886.469 2.48M20.169 9.46h-1.336l-.731 3.751h1.187q1.183 0 1.76-.445t.78-1.486q.194-.999-.177-1.41t-1.483-.41" />
    </svg>
  );
};
export { PhpFill };
