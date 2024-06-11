import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const SlackLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-slack-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M14.501 3a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-3 0v-5a1.5 1.5 0 0 1 1.5-1.5Zm-10 10h1.5v1.5a1.5 1.5 0 1 1-1.5-1.5Zm8.5 5h1.5a1.5 1.5 0 1 1-1.5 1.5V18Zm1.5-5h5a1.5 1.5 0 0 1 0 3h-5a1.5 1.5 0 1 1 0-3Zm5-5a1.5 1.5 0 0 1 0 3h-1.5V9.5a1.5 1.5 0 0 1 1.5-1.5Zm-15 0h5a1.5 1.5 0 1 1 0 3h-5a1.5 1.5 0 0 1 0-3Zm5-5a1.5 1.5 0 0 1 1.5 1.5V6h-1.5a1.5 1.5 0 1 1 0-3Zm0 10a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-3 0v-5a1.5 1.5 0 0 1 1.5-1.5Z" />
    </svg>
  );
};
export { SlackLine };
