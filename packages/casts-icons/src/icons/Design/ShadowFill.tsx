import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ShadowFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-shadow-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M2 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3H3a1 1 0 0 1-1-1V3Zm6 15v2h3.44l-2-2H8Zm3.56 0 2 2h2.88l-2-2h-2.88ZM20 20v-1.44l-2-2V17a1 1 0 0 1-1 1h-.44l2 2H20Zm0-6.44-2-2v2.88l2 2v-2.88Zm0-2.12V8h-2v1.44l2 2Z" />
    </svg>
  );
};
export { ShadowFill };
