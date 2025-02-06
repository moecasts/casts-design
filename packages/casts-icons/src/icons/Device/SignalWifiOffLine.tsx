import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const SignalWifiOffLine = (initProps: IconProps) => {
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
    `${prefixCls}-signal-wifi-off-line`,
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
      <path d="m2.808 1.393 17.678 17.678-1.414 1.414-3.683-3.682L12 21 .69 6.997c.914-.74 1.902-1.391 2.951-1.942L1.394 2.808zm.772 5.999L12 17.817l1.967-2.437-8.835-8.836q-.799.38-1.552.848M12 3c4.285 0 8.22 1.497 11.31 3.996l-5.406 6.693-1.422-1.422 3.938-4.876A15.9 15.9 0 0 0 12 5q-1.31 0-2.579.207L7.725 3.51C9.095 3.177 10.527 3 12.001 3" />
    </svg>
  );
};
export { SignalWifiOffLine };
