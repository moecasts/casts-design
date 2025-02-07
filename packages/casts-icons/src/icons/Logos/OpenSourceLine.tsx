import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const OpenSourceLine = (initProps: IconProps) => {
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
    `${prefixCls}-open-source-line`,
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
      <path d="M12.001 2c5.523 0 10 4.477 10 10 0 4.4-2.841 8.136-6.789 9.473l-.226.074-2.904-7.55A2.016 2.016 0 0 0 14.001 12a2 2 0 1 0-2.083 1.998l-2.903 7.549-.225-.074C4.842 20.136 2 16.4 2 12c0-5.523 4.477-10 10-10m0 2a8 8 0 0 0-4.099 14.872l1.48-3.849a4 4 0 1 1 5.239 0q.848 2.21 1.479 3.85A8 8 0 0 0 12 4" />
    </svg>
  );
};
export { OpenSourceLine };
