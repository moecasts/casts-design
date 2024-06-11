import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const AlarmWarningFill = (initProps: IconProps) => {
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
    `${prefixCls}-alarm-warning-fill`,
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
      <path d="M4 20v-6a8 8 0 1 1 16 0v6h1v2H3v-2h1Zm2-6h2a4 4 0 0 1 4-4V8a6 6 0 0 0-6 6Zm5-12h2v3h-2V2Zm8.778 2.808 1.414 1.414-2.12 2.121-1.415-1.414 2.121-2.121ZM2.808 6.222l1.414-1.414 2.121 2.12L4.93 8.344 2.808 6.222Z" />
    </svg>
  );
};
export { AlarmWarningFill };
