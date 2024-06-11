import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ContractLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-contract-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M21 8v4h-2V9h-5V4H5v16h6v2H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8Zm-7.214 7.327c.039-.727.6-1.319 1.324-1.396l.87-.092a.495.495 0 0 0 .279-.124l.651-.585a1.483 1.483 0 0 1 1.923-.05l.682.55c.08.065.18.103.284.109l.874.047c.727.039 1.319.6 1.396 1.324l.092.87c.011.104.054.201.124.279l.585.651c.487.542.508 1.357.05 1.923l-.55.682a.495.495 0 0 0-.109.284l-.047.874a1.483 1.483 0 0 1-1.324 1.396l-.87.092a.495.495 0 0 0-.279.124l-.651.585a1.483 1.483 0 0 1-1.923.05l-.682-.55a.495.495 0 0 0-.284-.109l-.874-.047a1.483 1.483 0 0 1-1.396-1.324l-.092-.87a.495.495 0 0 0-.124-.279l-.585-.651a1.483 1.483 0 0 1-.05-1.923l.55-.682a.495.495 0 0 0 .109-.284l.047-.874Zm7.244 1.703-1.06-1.06-2.47 2.47-1.47-1.47-1.06 1.06 2.53 2.53 3.53-3.53Z" />
    </svg>
  );
};
export { ContractLine };
