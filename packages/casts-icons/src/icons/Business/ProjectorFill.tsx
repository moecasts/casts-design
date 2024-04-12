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
      <path d="M11.111 12a4.502 4.502 0 0 0 8.777 0H22v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h9.111ZM5 16h2v2H5v-2Zm10.5-2.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM11.111 10H2V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v6h-2.111a4.502 4.502 0 0 0-8.777 0Z" />
    </svg>
  );
};
export { ProjectorFill };
