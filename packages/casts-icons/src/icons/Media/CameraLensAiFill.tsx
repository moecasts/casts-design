import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const CameraLensAiFill = (initProps: IconProps) => {
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
    `${prefixCls}-camera-lens-ai-fill`,
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
      <path d="m20.467 8.694.246-.566a4.36 4.36 0 0 1 2.22-2.25l.759-.339a.53.53 0 0 0 0-.963l-.717-.319a4.37 4.37 0 0 1-2.251-2.326l-.253-.611a.506.506 0 0 0-.942 0l-.253.61a4.37 4.37 0 0 1-2.25 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.36 4.36 0 0 1 2.219 2.251l.246.566c.18.414.753.414.934 0M14.309 14l-4.482 7.763c.7.155 1.427.237 2.173.237 2.18 0 4.198-.698 5.841-1.883zM2.458 15a10.03 10.03 0 0 0 5.432 6.119L11.423 15zM2 12q0 .507.05 1h7.063l-4.48-7.761A9.96 9.96 0 0 0 2 12M12 2c-2.18 0-4.198.698-5.841 1.883L9.69 10l4.482-7.763C13.473 2.082 12.746 2 12 2m10 10q0-.507-.05-1h-7.063l4.48 7.761A9.96 9.96 0 0 0 22 12" />
    </svg>
  );
};
export { CameraLensAiFill };
