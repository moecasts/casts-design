import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const SendPlaneLine = (initProps: IconProps) => {
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
    `${prefixCls}-send-plane-line`,
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
      <path d="m21.727 2.957-5.454 19.086c-.15.529-.475.553-.717.07L11 13 1.923 9.37c-.51-.205-.503-.51.034-.689L21.043 2.32c.529-.176.832.12.684.638Zm-2.692 2.14L6.812 9.17l5.637 2.255 3.04 6.08 3.546-12.41Z" />
    </svg>
  );
};
export { SendPlaneLine };
