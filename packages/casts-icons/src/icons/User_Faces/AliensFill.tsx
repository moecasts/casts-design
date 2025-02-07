import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const AliensFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-aliens-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M12 2a8.5 8.5 0 0 1 8.5 8.5c0 6.5-5.5 12-8.5 12s-8.5-5.5-8.5-12A8.5 8.5 0 0 1 12 2m5.5 10a4.5 4.5 0 0 0-4.475 4.975q.235.025.475.025a4.5 4.5 0 0 0 4.475-4.975A5 5 0 0 0 17.5 12m-11 0q-.24 0-.475.025a4.5 4.5 0 0 0 4.95 4.95Q11 16.74 11 16.5A4.5 4.5 0 0 0 6.5 12" />
    </svg>
  );
};
export { AliensFill };
