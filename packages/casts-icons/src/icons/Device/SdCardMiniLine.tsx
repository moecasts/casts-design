import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const SdCardMiniLine = (initProps: IconProps) => {
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
    `${prefixCls}-sd-card-mini-line`,
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
      <path d="M8 4v5.793a2.5 2.5 0 0 1-.73 1.765L6 12.833V20h12V4H8ZM7 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8.58a1 1 0 0 1 .292-.707l1.562-1.567A.5.5 0 0 0 6 9.793V3a1 1 0 0 1 1-1Zm8 3h2v4h-2V5Zm-3 0h2v4h-2V5ZM9 5h2v4H9V5Z" />
    </svg>
  );
};
export { SdCardMiniLine };
