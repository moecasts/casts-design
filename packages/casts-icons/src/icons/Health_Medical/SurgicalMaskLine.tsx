import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const SurgicalMaskLine = (initProps: IconProps) => {
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
    `${prefixCls}-surgical-mask-line`,
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
      <path d="m12.485 3.121 7.758 1.94a1 1 0 0 1 .757.97V7h1c1.1 0 2 .9 2 2v3a3 3 0 0 1-3 3h-.421a5.999 5.999 0 0 1-2.896 3.158l-4.789 2.395a2 2 0 0 1-1.788 0l-4.79-2.395A5.999 5.999 0 0 1 3.422 15H3a3 3 0 0 1-3-3V9a2 2 0 0 1 2-2h1v-.97a1 1 0 0 1 .757-.97l7.758-1.939a2 2 0 0 1 .97 0ZM12 5.061l-7 1.75v5.98a4 4 0 0 0 2.211 3.578L12 18.764l4.789-2.395A4 4 0 0 0 19 12.792v-5.98l-7-1.75ZM3 9H2v3a1 1 0 0 0 1 1V9Zm19 0h-1v4a1 1 0 0 0 1-1V9Z" />
    </svg>
  );
};
export { SurgicalMaskLine };
