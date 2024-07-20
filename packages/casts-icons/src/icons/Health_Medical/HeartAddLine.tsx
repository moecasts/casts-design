import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const HeartAddLine = (initProps: IconProps) => {
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
    `${prefixCls}-heart-add-line`,
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
      <path d="M19 14v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2Zm1.243-9.243a6 6 0 0 1 .237 8.235l-1.42-1.418c1.33-1.524 1.26-3.914-.233-5.404a4.001 4.001 0 0 0-5.49-.153l-1.335 1.198-1.336-1.197a4 4 0 0 0-5.686 5.605l8.432 8.446L12 21.485 3.52 12.993a6 6 0 0 1 8.48-8.464 5.998 5.998 0 0 1 8.242.228Z" />
    </svg>
  );
};
export { HeartAddLine };
