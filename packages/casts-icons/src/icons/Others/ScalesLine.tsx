import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ScalesLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-scales-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M12.998 2v1h7v2h-7v14h4v2h-10v-2h4V5h-7V3h7V2zm-8 4.343 2.828 2.829a4 4 0 1 1-5.657 0zm14 0 2.828 2.829a4 4 0 1 1-5.657 0zm-14 2.829-1.414 1.414a2 2 0 1 0 2.828 0zm14 0-1.414 1.414a2 2 0 1 0 2.828 0z" />
    </svg>
  );
};
export { ScalesLine };
