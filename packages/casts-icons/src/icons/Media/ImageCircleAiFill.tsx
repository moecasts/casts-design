import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ImageCircleAiFill = (initProps: IconProps) => {
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
    `${prefixCls}-image-circle-ai-fill`,
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
      <path d="m20.467 8.694.246-.566a4.36 4.36 0 0 1 2.22-2.25l.759-.339a.53.53 0 0 0 0-.963l-.717-.319a4.37 4.37 0 0 1-2.251-2.326l-.253-.611a.506.506 0 0 0-.942 0l-.253.61a4.37 4.37 0 0 1-2.25 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.36 4.36 0 0 1 2.219 2.251l.246.566c.18.414.753.414.934 0M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10q0-.604-.07-1.19l-1.986.235a8.1 8.1 0 0 1-.368 3.53l-3.869-3.868a1 1 0 0 0-1.414 0l-7.428 7.428A8 8 0 0 1 14 4.252l.498-1.937C13.698 2.109 12.861 2 12 2M9 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    </svg>
  );
};
export { ImageCircleAiFill };
