import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ToolsLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-tools-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M5.33 3.272a3.5 3.5 0 0 1 4.254 4.962l10.709 10.71-1.414 1.414-10.71-10.71a3.502 3.502 0 0 1-4.962-4.255L5.444 7.63a1.5 1.5 0 0 0 2.121-2.121L5.33 3.272Zm10.367 1.883 3.182-1.768 1.414 1.415-1.768 3.181-1.768.354-2.12 2.121-1.415-1.414 2.121-2.121.354-1.768Zm-6.718 8.132 1.415 1.414-5.304 5.303a1 1 0 0 1-1.492-1.327l.078-.087 5.303-5.303Z" />
    </svg>
  );
};
export { ToolsLine };
