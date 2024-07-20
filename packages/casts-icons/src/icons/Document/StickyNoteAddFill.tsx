import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const StickyNoteAddFill = (initProps: IconProps) => {
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
    `${prefixCls}-sticky-note-add-fill`,
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
      <path d="M4 1v3H1v2h3v3h2V6h3V4H6V1H4Zm7 4a6 6 0 0 1-8 5.659v9.348c0 .548.447.993.998.993H14v-6c0-.55.45-1 1-1h6V3.998A.996.996 0 0 0 20.007 3h-9.348A5.99 5.99 0 0 1 11 5Zm10 11-5 4.997V16h5Z" />
    </svg>
  );
};
export { StickyNoteAddFill };
