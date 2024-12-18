import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ProjectorFill = (initProps: IconProps) => {
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
    `${prefixCls}-projector-fill`,
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
      <path d="M3 3h18a1 1 0 0 1 1 1v6h-3.126a4.002 4.002 0 0 0-7.748 0H2V4a1 1 0 0 1 1-1m-1 9v8a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-8h-3.126a4.002 4.002 0 0 1-7.748 0zm13-3a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-9 6h2v2H6z" />
    </svg>
  );
};
export { ProjectorFill };
