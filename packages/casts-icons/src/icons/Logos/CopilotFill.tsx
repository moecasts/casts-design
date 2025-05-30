import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const CopilotFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-copilot-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M8.662 14.484a1.001 1.001 0 1 1 2.003 0v1.997a1.001 1.001 0 1 1-2.003 0zm6.675 0a1.001 1.001 0 1 0-2.003 0v1.997a1.001 1.001 0 1 0 2.003 0zM11.999 4.028c-.845-1.219-2.598-1.31-3.945-1.188-1.543.154-2.843.685-3.574 1.464-1.268 1.386-1.326 4.291-.715 5.89-.061.274-.12.551-.162.845-1.13.297-2.283 1.898-2.283 3.043v2.162c0 .6.28 1.148.775 1.522C4.919 19.864 8.439 21.49 12 21.49s7.08-1.626 9.904-3.724a1.89 1.89 0 0 0 .775-1.521v-2.163c0-1.145-1.153-2.746-2.283-3.043-.042-.294-.1-.57-.162-.844.611-1.6.552-4.505-.715-5.89-.731-.78-2.03-1.31-3.574-1.465-1.347-.121-3.1-.03-3.946 1.188m6.675 13.46c-1.535.854-4.085 2-6.674 2s-5.14-1.146-6.675-2v-5.799c2.477.96 5.327.465 6.673-1.758H12c1.346 2.223 4.196 2.717 6.673 1.758zm-8.01-10.66c0 1.586-.48 3.312-2.67 3.312s-2.606-.524-2.606-1.997c0-2.336.356-3.336 3.316-3.336 1.71 0 1.96.55 1.96 2.022m2.67 0c0-1.472.25-2.02 1.961-2.02 2.96 0 3.316 1 3.316 3.335 0 1.473-.417 1.997-2.607 1.997s-2.67-1.726-2.67-3.311" />
    </svg>
  );
};
export { CopilotFill };
