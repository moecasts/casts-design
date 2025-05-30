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
      <path d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm7.334 13.055q1.08.87 2.156.858.66 0 1.012-.242a.75.75 0 0 0 .341-.66.97.97 0 0 0-.34-.748q-.352-.307-1.332-.616-1.177-.34-1.815-.88-.626-.54-.638-1.507 0-.913.792-1.529.77-.616 1.97-.616 1.672 0 2.683.814l-.77 1.199a2.6 2.6 0 0 0-.935-.462 3.2 3.2 0 0 0-.946-.165q-.57 0-.913.209-.34.21-.34.55 0 .374.417.638.42.254 1.43.561 1.221.363 1.738.968t.517 1.54q0 .957-.737 1.65-.726.682-2.112.715-1.815 0-3.036-1.089zm-5.53.638q.352.22.847.22.517 0 .858-.297.34-.308.341-1.067v-5.302h1.485v5.588q-.033 1.298-.748 1.87a2.5 2.5 0 0 1-.891.484 3.3 3.3 0 0 1-.935.143q-.825 0-1.463-.286-.682-.307-1.144-1.089l1.034-.847q.285.385.616.583" />
    </svg>
  );
};
export { JavascriptFill };
