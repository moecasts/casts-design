import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const JavascriptFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(
    `${prefixCls}`,
    `${prefixCls}-javascript-fill`,
    className,
  );
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm7.334 13.055c.72.58 1.438.865 2.156.858.44 0 .778-.08 1.012-.242a.75.75 0 0 0 .341-.66.971.971 0 0 0-.34-.748c-.235-.205-.679-.41-1.332-.616-.784-.227-1.39-.52-1.815-.88-.418-.36-.63-.862-.638-1.507 0-.609.264-1.118.792-1.529.514-.41 1.17-.616 1.97-.616 1.114 0 2.009.271 2.683.814l-.77 1.199a2.597 2.597 0 0 0-.935-.462 3.211 3.211 0 0 0-.946-.165c-.38 0-.685.07-.913.209-.227.14-.34.323-.34.55 0 .25.139.462.417.638.28.169.756.356 1.43.561.814.242 1.394.565 1.738.968.345.403.517.917.517 1.54 0 .638-.245 1.188-.737 1.65-.484.455-1.188.693-2.112.715-1.21 0-2.222-.363-3.036-1.089l.858-1.188Zm-5.53.638c.235.147.517.22.847.22.345 0 .63-.099.858-.297.227-.205.341-.561.341-1.067v-5.302h1.485v5.588c-.022.865-.271 1.489-.748 1.87a2.466 2.466 0 0 1-.891.484 3.296 3.296 0 0 1-.935.143c-.55 0-1.038-.095-1.463-.286-.455-.205-.836-.568-1.144-1.089l1.034-.847c.19.257.396.451.616.583Z" />
    </svg>
  );
};
export { JavascriptFill };
