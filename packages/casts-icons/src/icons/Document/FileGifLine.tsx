import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FileGifLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-file-gif-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m16 2 5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.447 2 3.999 2zm-1 2H5v16h14V8h-4zm-2 6v5h-1v-5zm-2 0v1H9a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1v-1H9v-1h2v2a1 1 0 0 1-1 1H9a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2zm6 0v1h-2v1h2v1h-2v2h-1v-5z" />
    </svg>
  );
};
export { FileGifLine };
