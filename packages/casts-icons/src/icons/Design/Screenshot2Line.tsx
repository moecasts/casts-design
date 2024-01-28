import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Screenshot2Line = (initProps: IconProps) => {
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
    `${prefixCls}-screenshot2-line`,
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
      <path d="M3 3h2v2H3V3Zm4 0h2v2H7V3Zm4 0h2v2h-2V3Zm4 0h2v2h-2V3Zm4 0h2v2h-2V3Zm0 4h2v2h-2V7ZM3 19h2v2H3v-2Zm0-4h2v2H3v-2Zm0-4h2v2H3v-2Zm0-4h2v2H3V7Zm7.667 4 1.036-1.555A1 1 0 0 1 12.535 9h2.93a1 1 0 0 1 .832.445L17.333 11H20a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h2.667ZM9 19h10v-6h-2.737l-1.333-2h-1.86l-1.333 2H9v6Zm5-1a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
    </svg>
  );
};
export { Screenshot2Line };
