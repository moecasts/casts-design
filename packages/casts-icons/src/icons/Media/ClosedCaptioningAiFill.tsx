import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ClosedCaptioningAiFill = (initProps: IconProps) => {
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
    `${prefixCls}-closed-captioning-ai-fill`,
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
      <path d="m20.467 8.694.246-.566a4.36 4.36 0 0 1 2.22-2.25l.759-.339a.53.53 0 0 0 0-.963l-.717-.319a4.37 4.37 0 0 1-2.251-2.326l-.253-.611a.506.506 0 0 0-.942 0l-.253.61a4.37 4.37 0 0 1-2.25 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.36 4.36 0 0 1 2.219 2.251l.246.566c.18.414.753.414.934 0M22 20v-9.341A6 6 0 0 1 20 11c-.88 0-1.715-.19-2.468-.53l-.117.117a2 2 0 1 0 0 2.828l1.413 1.413a4.001 4.001 0 1 1-3.933-6.673A5.97 5.97 0 0 1 14 5c0-.701.12-1.374.341-2H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1M9 8c1.104 0 2.105.448 2.829 1.173l-1.414 1.414a2 2 0 1 0 0 2.828l1.413 1.413A4 4 0 0 1 9 16c-2.208 0-4-1.792-4-4s1.792-4 4-4" />
    </svg>
  );
};
export { ClosedCaptioningAiFill };
