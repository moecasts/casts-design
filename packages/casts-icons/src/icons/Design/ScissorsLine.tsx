import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ScissorsLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-scissors-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M9.446 8.029 12 10.582l6.728-6.727a2 2 0 0 1 2.828 0l-12.11 12.11a4 4 0 1 1-1.414-1.414l2.554-2.554-2.554-2.554a4 4 0 1 1 1.414-1.414Zm5.38 5.379 6.73 6.73a2 2 0 0 1-2.828 0l-5.317-5.316 1.415-1.414Zm-7.412 3.175a2 2 0 1 0-2.828 2.828 2 2 0 0 0 2.828-2.829Zm0-9.172a2 2 0 1 0-2.828-2.828A2 2 0 0 0 7.414 7.41Z" />
    </svg>
  );
};
export { ScissorsLine };
