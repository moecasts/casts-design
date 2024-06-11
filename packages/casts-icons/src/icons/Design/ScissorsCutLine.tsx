import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ScissorsCutLine = (initProps: IconProps) => {
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
    `${prefixCls}-scissors-cut-line`,
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
      <path d="M10 5.997c0 .732-.197 1.419-.54 2.01L12 10.581l6.728-6.727a2 2 0 0 1 2.828 0l-12.11 12.11a4 4 0 1 1-1.414-1.414l2.554-2.554-2.554-2.554A4 4 0 1 1 10 5.997Zm-2 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm13.556 14.142a2 2 0 0 1-2.828 0l-5.317-5.317 1.415-1.414 6.73 6.73ZM16 10.997h2v2h-2v-2Zm4 0h2v2h-2v-2Zm-14 0h2v2H6v-2Zm-4 0h2v2H2v-2Zm4 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </svg>
  );
};
export { ScissorsCutLine };
