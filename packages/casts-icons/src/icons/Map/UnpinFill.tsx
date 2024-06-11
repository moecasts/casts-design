import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const UnpinFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-unpin-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m20.971 17.172-1.414 1.414-3.535-3.535-.073.074-.707 3.535-1.415 1.415-4.242-4.243-4.95 4.95-1.414-1.414 4.95-4.95-4.243-4.243 1.414-1.414 3.536-.707.073-.074-3.536-3.536 1.414-1.415L20.97 17.172Zm-2.12-4.95 1.34-1.34.707.707 1.415-1.414-8.486-8.485-1.414 1.414.707.707-1.34 1.34 7.07 7.072Z" />
    </svg>
  );
};
export { UnpinFill };
