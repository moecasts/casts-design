import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const EmphasisCn = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-emphasis-cn`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M12 19a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-5.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm11 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM13 2v2h6v2h-1.968a18.222 18.222 0 0 1-3.621 6.302 14.683 14.683 0 0 0 5.327 3.042l-.536 1.93A16.686 16.686 0 0 1 12 13.726 16.697 16.697 0 0 1 5.8 17.273l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042 18.077 18.077 0 0 1-2.822-4.3h2.24A16.03 16.03 0 0 0 12 10.876a16.17 16.17 0 0 0 2.91-4.876L5 6V4h6V2h2Z" />
    </svg>
  );
};
export { EmphasisCn };
