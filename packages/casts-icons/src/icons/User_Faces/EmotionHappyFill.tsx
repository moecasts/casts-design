import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const EmotionHappyFill = (initProps: IconProps) => {
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
    `${prefixCls}-emotion-happy-fill`,
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
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m-5-9a5 5 0 0 0 10 0h-2a3 3 0 1 1-6 0zm1-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m8 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
    </svg>
  );
};
export { EmotionHappyFill };
