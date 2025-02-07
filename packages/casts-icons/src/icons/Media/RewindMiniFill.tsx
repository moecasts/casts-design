import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const RewindMiniFill = (initProps: IconProps) => {
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
    `${prefixCls}-rewind-mini-fill`,
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
      <path d="M11 17.035a.5.5 0 0 1-.788.409l-7.133-5.035a.5.5 0 0 1 0-.818l7.133-5.035a.5.5 0 0 1 .788.409zm1.079-4.626a.5.5 0 0 1 0-.818l7.133-5.035a.5.5 0 0 1 .788.409v10.07a.5.5 0 0 1-.788.409z" />
    </svg>
  );
};
export { RewindMiniFill };
