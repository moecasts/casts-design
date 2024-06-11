import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const DiscordFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-discord-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M19.303 5.337A17.32 17.32 0 0 0 14.963 4c-.191.329-.403.775-.552 1.125a16.592 16.592 0 0 0-4.808 0C9.454 4.775 9.23 4.329 9.05 4a17.075 17.075 0 0 0-4.342 1.337C1.961 9.391 1.218 13.35 1.59 17.255a17.69 17.69 0 0 0 5.318 2.664 12.94 12.94 0 0 0 1.136-1.836c-.627-.234-1.22-.52-1.794-.86.149-.106.297-.223.435-.34 3.46 1.582 7.207 1.582 10.624 0 .149.117.287.234.435.34-.573.34-1.167.626-1.793.86a12.94 12.94 0 0 0 1.135 1.836 17.594 17.594 0 0 0 5.318-2.664c.457-4.52-.722-8.448-3.1-11.918ZM8.52 14.846c-1.04 0-1.889-.945-1.889-2.101 0-1.157.828-2.102 1.89-2.102 1.05 0 1.91.945 1.888 2.102 0 1.156-.838 2.1-1.889 2.1Zm6.974 0c-1.04 0-1.89-.945-1.89-2.101 0-1.157.828-2.102 1.89-2.102 1.05 0 1.91.945 1.889 2.102 0 1.156-.828 2.1-1.89 2.1Z" />
    </svg>
  );
};
export { DiscordFill };
