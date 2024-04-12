import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const PhoneCameraLine = (initProps: IconProps) => {
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
    `${prefixCls}-phone-camera-line`,
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
      <path d="M14.803 4a5.958 5.958 0 0 0-.72 2H3v12h18v-5.083a5.958 5.958 0 0 0 2-.72V19c0 .553-.44 1.001-1.003 1.001H2.002A1 1 0 0 1 1 19V5c0-.552.44-1 1.002-1h12.8ZM20 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm-2 2h2v3h-2v-3Z" />
    </svg>
  );
};
export { PhoneCameraLine };
