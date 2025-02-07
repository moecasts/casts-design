import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const VerifiedBadgeFill = (initProps: IconProps) => {
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
    `${prefixCls}-verified-badge-fill`,
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
      <path d="M10.007 2.104a3 3 0 0 0-3.595 1.49L5.606 5.17a1 1 0 0 1-.436.436l-1.577.806a3 3 0 0 0-1.49 3.595l.546 1.685a1 1 0 0 1 0 .616l-.545 1.685a3 3 0 0 0 1.49 3.595l1.576.806a1 1 0 0 1 .436.436l.806 1.577a3 3 0 0 0 3.595 1.49l1.685-.546a1 1 0 0 1 .616 0l1.685.545a3 3 0 0 0 3.595-1.489l.806-1.577a1 1 0 0 1 .436-.436l1.577-.805a3 3 0 0 0 1.49-3.596l-.546-1.685a1 1 0 0 1 0-.616l.545-1.685a3 3 0 0 0-1.489-3.595l-1.577-.806a1 1 0 0 1-.436-.436l-.805-1.577a3 3 0 0 0-3.596-1.49l-1.685.546a1 1 0 0 1-.616 0zM6.76 11.757l1.414-1.414 2.828 2.829 5.657-5.657 1.415 1.414-7.072 7.07z" />
    </svg>
  );
};
export { VerifiedBadgeFill };
