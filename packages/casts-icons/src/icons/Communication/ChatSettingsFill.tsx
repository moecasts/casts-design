import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ChatSettingsFill = (initProps: IconProps) => {
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
    `${prefixCls}-chat-settings-fill`,
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
      <path d="M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm1.69-6.929-.975.563 1 1.732.976-.563c.501.51 1.14.887 1.854 1.071V16h2v-1.126a4 4 0 0 0 1.854-1.072l.976.564 1-1.732-.975-.563a4 4 0 0 0 0-2.142l.975-.563-1-1.732-.976.563A4 4 0 0 0 13 7.126V6h-2v1.126a4 4 0 0 0-1.854 1.071l-.976-.563-1 1.732.975.563a4 4 0 0 0 0 2.142M12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
    </svg>
  );
};
export { ChatSettingsFill };
