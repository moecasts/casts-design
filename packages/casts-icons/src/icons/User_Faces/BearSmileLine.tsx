import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const BearSmileLine = (initProps: IconProps) => {
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
    `${prefixCls}-bear-smile-line`,
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
      <path d="M12 17a4 4 0 0 0 4-4h-2a2 2 0 1 1-4 0H8a4 4 0 0 0 4 4ZM6.5 2a4.5 4.5 0 0 0-2.95 7.898 9 9 0 1 0 16.901 0 4.5 4.5 0 1 0-6.79-5.745 9.044 9.044 0 0 0-3.321 0A4.496 4.496 0 0 0 6.5 2ZM4 6.5a2.5 2.5 0 0 1 4.852-.851l.318.878.898-.257A7.004 7.004 0 0 1 12 6c.672 0 1.32.094 1.932.27l.898.257.318-.878a2.501 2.501 0 1 1 3.58 3.03l-.814.46.404.842a7 7 0 1 1-12.635 0l.403-.843-.814-.46A2.499 2.499 0 0 1 4 6.5Z" />
    </svg>
  );
};
export { BearSmileLine };
