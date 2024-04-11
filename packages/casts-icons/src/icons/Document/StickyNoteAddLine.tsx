import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const StickyNoteAddLine = (initProps: IconProps) => {
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
    `${prefixCls}-sticky-note-add-line`,
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
      <path d="M4 1v3H1v2h3v3h2V6h3V4H6V1H4ZM3 20.007V11h2v8h8v-5c0-.55.45-1 1-1l5-.001V5h-8V3h9.007c.548 0 .993.456.993 1.002V15l-6 5.996L4.002 21A.998.998 0 0 1 3 20.007Zm15.171-5.008L15 15v3.169l3.171-3.17Z" />
    </svg>
  );
};
export { StickyNoteAddLine };
