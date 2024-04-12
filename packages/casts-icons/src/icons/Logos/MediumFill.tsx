import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const MediumFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-medium-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M13.41 12.007c0 3.45-2.779 6.247-6.205 6.247C3.778 18.254 1 15.458 1 12.007 1 8.557 3.778 5.76 7.205 5.76c3.426 0 6.204 2.797 6.204 6.247Zm6.806 0c0 3.248-1.39 5.88-3.102 5.88-1.714 0-3.103-2.633-3.103-5.88s1.39-5.88 3.103-5.88c1.713 0 3.102 2.633 3.102 5.88Zm2.784 0c0 2.91-.489 5.269-1.091 5.269-.603 0-1.091-2.36-1.091-5.269 0-2.91.488-5.269 1.091-5.269S23 9.098 23 12.008Z" />
    </svg>
  );
};
export { MediumFill };
