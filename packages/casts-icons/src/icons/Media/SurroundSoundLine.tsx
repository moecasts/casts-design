import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const SurroundSoundLine = (initProps: IconProps) => {
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
    `${prefixCls}-surround-sound-line`,
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
      <path d="M4 5v14h16V5H4ZM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm4.05 4.121 1.414 1.415A4.984 4.984 0 0 0 7 12.07c0 1.38.56 2.63 1.464 3.536L7.05 17.02A6.978 6.978 0 0 1 5 12.07c0-1.933.784-3.683 2.05-4.95Zm9.9 0a6.978 6.978 0 0 1 2.05 4.95 6.978 6.978 0 0 1-2.05 4.95l-1.414-1.414A4.984 4.984 0 0 0 17 12.07c0-1.38-.56-2.63-1.464-3.535L16.95 7.12ZM12 13.071a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
    </svg>
  );
};
export { SurroundSoundLine };
