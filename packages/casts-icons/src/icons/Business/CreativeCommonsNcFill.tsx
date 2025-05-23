import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const CreativeCommonsNcFill = (initProps: IconProps) => {
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
    `${prefixCls}-creative-commons-nc-fill`,
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
      <path d="m4.256 5.672 3.58 3.577A2.5 2.5 0 0 0 10 13h3.999l.09.008A.5.5 0 0 1 14 14H8.5v2H11v2h2v-2h1q.273-.001.53-.056l3.798 3.8A9.96 9.96 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.4.846-4.604 2.256-6.328M12 2c5.523 0 10 4.477 10 10 0 2.4-.846 4.604-2.256 6.328l-3.579-3.577A2.5 2.5 0 0 0 14 11h-4l-.09-.01A.5.5 0 0 1 10 10h5.5V8H13V6h-2v2h-1q-.272.001-.529.056l-3.799-3.8A9.96 9.96 0 0 1 12 2" />
    </svg>
  );
};
export { CreativeCommonsNcFill };
