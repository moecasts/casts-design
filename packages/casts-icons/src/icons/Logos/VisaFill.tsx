import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const VisaFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-visa-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M1 4h22v2H1zm0 14h22v2H1zm18.622-3.086-.174-.87h-1.949l-.31.863-1.562.004q1.507-3.61 2.236-5.35c.127-.302.353-.456.685-.454q.381.003 1.245 0L21 14.912zm-1.684-2.062h1.256l-.47-2.18zM7.872 9.106l1.57.002-2.427 5.806-1.59-.001q-.806-3.106-1.184-4.605c-.077-.307-.23-.521-.526-.622Q3.321 9.55 2.4 9.267v-.16h2.509c.434 0 .687.21.769.64l.62 3.289zm3.727.002-1.24 5.805-1.495-.002 1.24-5.805zM14.631 9c.446 0 1.01.138 1.334.267l-.262 1.204c-.293-.118-.775-.277-1.18-.27-.59.009-.954.256-.954.493 0 .384.632.578 1.284.999.743.48.84.91.832 1.378-.011.971-.832 1.929-2.565 1.929-.791-.012-1.076-.078-1.72-.306l.272-1.256c.656.274.935.361 1.495.361.515 0 .956-.207.96-.568.002-.257-.155-.384-.732-.702s-1.386-.756-1.375-1.64C12.033 9.759 13.107 9 14.63 9" />
    </svg>
  );
};
export { VisaFill };
