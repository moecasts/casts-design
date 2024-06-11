import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const GooglePlayLine = (initProps: IconProps) => {
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
    `${prefixCls}-google-play-line`,
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
      <path d="M4.001 1.734a1 1 0 0 1 .501.135l16.004 9.265a1 1 0 0 1 0 1.731L4.502 22.131a1 1 0 0 1-1.501-.866V2.735a1 1 0 0 1 1-1Zm8.292 11.68-4.498 4.498 5.699-3.299-1.2-1.2ZM5 6.118v11.76l5.88-5.88L5 6.12Zm10.284 4.302L13.707 12l1.578 1.577L18.009 12l-2.725-1.579Zm-7.49-4.336 4.5 4.5 1.199-1.2-5.699-3.3Z" />
    </svg>
  );
};
export { GooglePlayLine };
