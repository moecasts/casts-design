import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const NotionFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-notion-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M6.104 5.91c.584.474.802.438 1.898.365l10.332-.62c.22 0 .037-.22-.036-.256l-1.716-1.24c-.329-.255-.767-.548-1.606-.475l-10.005.73c-.364.036-.437.219-.292.365zm.62 2.408v10.87c0 .585.292.803.95.767l11.354-.657c.657-.036.73-.438.73-.913V7.588c0-.474-.182-.73-.584-.693l-11.866.693c-.438.036-.584.255-.584.73m11.21.583c.072.328 0 .657-.33.694l-.547.109v8.025c-.475.256-.913.401-1.278.401-.584 0-.73-.182-1.168-.729l-3.579-5.618v5.436l1.133.255s0 .656-.914.656l-2.519.146c-.073-.146 0-.51.256-.583l.657-.182v-7.187l-.913-.073c-.073-.329.11-.803.621-.84l2.702-.182 3.724 5.692V9.886l-.95-.109c-.072-.402.22-.693.585-.73zM4.131 3.429l10.406-.766c1.277-.11 1.606-.036 2.41.547l3.321 2.335c.548.401.731.51.731.948v12.805c0 .803-.292 1.277-1.314 1.35l-12.085.73c-.767.036-1.132-.073-1.534-.584L3.62 17.62C3.182 17.036 3 16.599 3 16.087V4.705c0-.656.292-1.203 1.132-1.276" />
    </svg>
  );
};
export { NotionFill };
