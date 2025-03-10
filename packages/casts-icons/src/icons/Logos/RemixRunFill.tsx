import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const RemixRunFill = (initProps: IconProps) => {
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
    `${prefixCls}-remix-run-fill`,
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
      <path d="M19.116 20c0-1.064 0-2.04-.162-4.119-.2-2.09-1.289-3.148-3.15-3.52 2.205-.286 3.837-2.004 3.837-4.637C19.64 4.204 17.32 2 12.656 2H4v3.669h7.797c2.061 0 3.092.884 3.092 2.344 0 1.66-1.03 2.287-3.092 2.287H4v3.75h7.568c1.632 0 2.52.457 2.662 2.518a25 25 0 0 1 .082 2.773v.003c-.004.214-.008.425-.008.656zM4 17.205V20h6.122v-1.79c0-.375-.184-1.005-1.034-1.005z" />
    </svg>
  );
};
export { RemixRunFill };
