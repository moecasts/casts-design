import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Forward10Line = (initProps: IconProps) => {
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
    `${prefixCls}-forward10-line`,
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
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10h-2a8 8 0 1 1-1.384-4.5H16v1.25a2.5 2.5 0 0 0-4 2v2.5a2.5 2.5 0 0 0 5 0v-2.5c0-.455-.122-.882-.334-1.25H22v-6h-2V6a9.99 9.99 0 0 0-8-4m3.5 8.75v2.5a1 1 0 1 1-2 0v-2.5a1 1 0 1 1 2 0M10 8.5H8.5v7H10z" />
    </svg>
  );
};
export { Forward10Line };
