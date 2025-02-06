import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ImageCircleAiLine = (initProps: IconProps) => {
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
    `${prefixCls}-image-circle-ai-line`,
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
      <path d="m20.467 8.694.246-.566a4.36 4.36 0 0 1 2.22-2.25l.759-.339a.53.53 0 0 0 0-.963l-.717-.319a4.37 4.37 0 0 1-2.251-2.326l-.253-.611a.506.506 0 0 0-.942 0l-.253.61a4.37 4.37 0 0 1-2.25 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.36 4.36 0 0 1 2.219 2.251l.246.566c.18.414.753.414.934 0M12 4a8 8 0 0 0-5.135 14.135l7.428-7.428a1 1 0 0 1 1.414 0l3.87 3.87q0-.006.003-.011a8 8 0 0 0 .364-3.52l1.986-.237Q22 11.396 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2c.861 0 1.699.11 2.498.315L14 4.252A8 8 0 0 0 12 4m-1.187 15.913q.58.086 1.187.087c2.761 0 5.2-1.4 6.638-3.533L15 12.828l-6.41 6.41.003.003a8 8 0 0 0 2.22.672M11 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
    </svg>
  );
};
export { ImageCircleAiLine };
