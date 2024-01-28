import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const NotionLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-notion-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M16.285 2.955a1.889 1.889 0 0 0-1.211-.31l-11.06.961a.989.989 0 0 0-.903.986v11.575c0 .408.133.806.378 1.133l2.767 3.69c.203.27.53.418.867.392l12.853-.989a.989.989 0 0 0 .913-.986V6.527a.939.939 0 0 0-.418-.781l-4.186-2.791Zm-1.057 1.46a.111.111 0 0 1 .071.02l2.746 1.83-10.207.816-1.86-1.86 9.25-.805Zm3.883 14.262-10.722.825V8.82l10.722-.858v10.714ZM4.89 6.646l1.722 1.722V18.5l-1.7-2.267a.111.111 0 0 1-.022-.066V6.646Zm7.09 3.477-1.977.13v7.562l1.996-.13v-4.337l3.512 4.169 1.976-.13V9.825l-1.996.13v4.337l-3.511-4.169Z" />
    </svg>
  );
};
export { NotionLine };
