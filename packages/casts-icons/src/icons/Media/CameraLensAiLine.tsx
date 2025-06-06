import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const CameraLensAiLine = (initProps: IconProps) => {
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
    `${prefixCls}-camera-lens-ai-line`,
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
      <path d="m20.467 8.694.246-.566a4.36 4.36 0 0 1 2.22-2.25l.759-.339a.53.53 0 0 0 0-.963l-.717-.319a4.37 4.37 0 0 1-2.251-2.326l-.253-.611a.506.506 0 0 0-.942 0l-.253.61a4.37 4.37 0 0 1-2.25 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.36 4.36 0 0 1 2.219 2.251l.246.566c.18.414.753.414.934 0M12 22c5.523 0 10-4.477 10-10q0-.605-.07-1.19l-1.986.235q.056.47.056.955c0 1.458-.39 2.824-1.071 4.001L15.464 10h2.466l-1.154-2H12l3.169-5.488A10 10 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10m0-18-3.464 6-2.141-3.708A7.98 7.98 0 0 1 12 4m-2.31 8 1.156-2h2.309l1.155 2-1.155 2h-2.31zM12 16l-2.142 3.71A8.02 8.02 0 0 1 5.07 16zm0 4 3.464-6 2.141 3.708A7.97 7.97 0 0 1 12 20M5.071 7.999 8.536 14H4.252A8 8 0 0 1 4 12c0-1.458.39-2.824 1.071-4.001" />
    </svg>
  );
};
export { CameraLensAiLine };
