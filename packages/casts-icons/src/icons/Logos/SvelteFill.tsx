import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const SvelteFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-svelte-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M10.99 1.974c2.92-1.86 6.957-.992 9.001 1.934a6.268 6.268 0 0 1 1.072 4.74 5.9 5.9 0 0 1-.88 2.198c.64 1.221.855 2.62.61 3.977a5.882 5.882 0 0 1-2.657 3.94l-5.127 3.268c-2.92 1.86-6.957.993-9.002-1.933a6.269 6.269 0 0 1-1.07-4.741 5.9 5.9 0 0 1 .88-2.198 6.195 6.195 0 0 1-.611-3.977 5.881 5.881 0 0 1 2.658-3.94l5.126-3.268ZM8.049 20.25c.782.29 1.633.332 2.44.123.369-.099.72-.253 1.042-.458l5.128-3.267a3.538 3.538 0 0 0 1.598-2.37 3.769 3.769 0 0 0-.645-2.85 4.072 4.072 0 0 0-4.37-1.62c-.369.099-.72.253-1.042.458l-1.957 1.246a1.131 1.131 0 0 1-.314.138 1.227 1.227 0 0 1-1.5-.899 1.138 1.138 0 0 1-.01-.45 1.066 1.066 0 0 1 .48-.713l5.129-3.268a1.13 1.13 0 0 1 .314-.138 1.227 1.227 0 0 1 1.317.489c.157.222.23.492.207.762l-.018.19.191.058c.72.218 1.399.557 2.005 1.003l.263.192.096-.295c.052-.156.093-.316.123-.478a3.769 3.769 0 0 0-.644-2.85 4.073 4.073 0 0 0-4.371-1.621 3.74 3.74 0 0 0-1.042.458L7.34 7.357a3.537 3.537 0 0 0-1.6 2.37 3.768 3.768 0 0 0 .645 2.85 4.073 4.073 0 0 0 4.371 1.62c.369-.099.72-.253 1.042-.457l1.956-1.248c.098-.061.204-.108.315-.137a1.228 1.228 0 0 1 1.5.899c.034.147.037.3.011.449a1.067 1.067 0 0 1-.482.713l-5.127 3.269a1.125 1.125 0 0 1-.314.137 1.226 1.226 0 0 1-1.317-.488 1.149 1.149 0 0 1-.207-.762l.017-.19-.19-.058a6.613 6.613 0 0 1-2.005-1.003l-.263-.192-.096.295a3.568 3.568 0 0 0-.123.478 3.77 3.77 0 0 0 .644 2.85 4.073 4.073 0 0 0 1.93 1.498Z" />
    </svg>
  );
};
export { SvelteFill };