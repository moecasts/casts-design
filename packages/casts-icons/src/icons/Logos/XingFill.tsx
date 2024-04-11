import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const XingFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-xing-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M20.462 3.23c.154 0 .308.078.384.155a.49.49 0 0 1 0 .461l-6.076 10.77 3.846 7.076a.49.49 0 0 1 0 .462.588.588 0 0 1-.385.154h-2.77c-.384 0-.614-.308-.768-.539l-3.923-7.154C11 14.308 16.924 3.77 16.924 3.77c.153-.308.384-.538.769-.538h2.769ZM8.923 7c.385 0 .616.308.77.538l1.923 3.308c-.154.154-3 5.23-3 5.23-.154.232-.385.54-.77.54H5.155a.588.588 0 0 1-.384-.154.49.49 0 0 1 0-.462l2.846-5.154-1.846-3.23a.49.49 0 0 1 0-.462A.588.588 0 0 1 6.154 7h2.77Z" />
    </svg>
  );
};
export { XingFill };
