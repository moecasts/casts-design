import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ChatSettingsLine = (initProps: IconProps) => {
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
    `${prefixCls}-chat-settings-line`,
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
      <path d="M22 12h-2V5H4v13.385L5.763 17H12v2H6.455L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm-7.855 7.071a4 4 0 0 1 0-2.142l-.975-.563 1-1.732.976.563A4 4 0 0 1 17 14.127V13h2v1.126c.715.184 1.352.56 1.854 1.072l.976-.564 1 1.732-.975.563a4 4 0 0 1 0 2.142l.975.563-1 1.732-.976-.564c-.502.511-1.14.888-1.854 1.072V23h-2v-1.126a4 4 0 0 1-1.854-1.072l-.976.564-1-1.732zM18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    </svg>
  );
};
export { ChatSettingsLine };
