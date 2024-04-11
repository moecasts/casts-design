import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FridgeLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-fridge-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M18.998 1a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h14Zm-1 11h-12v9h12v-9Zm-8 2v4h-2v-4h2Zm8-11h-12v7h12V3Zm-8 2v3h-2V5h2Z" />
    </svg>
  );
};
export { FridgeLine };
