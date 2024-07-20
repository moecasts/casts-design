import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FolderSettingsLine = (initProps: IconProps) => {
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
    `${prefixCls}-folder-settings-line`,
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
      <path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2ZM4 5v14h16V7h-8.414l-2-2H4Zm4.591 8.809a3.508 3.508 0 0 1 0-1.622l-.991-.572 1-1.732.991.573a3.494 3.494 0 0 1 1.404-.812V8.5h2v1.144c.532.159 1.01.44 1.404.812l.991-.573 1 1.732-.991.572a3.508 3.508 0 0 1 0 1.622l.991.572-1 1.731-.991-.572a3.495 3.495 0 0 1-1.404.811v1.145h-2V16.35a3.495 3.495 0 0 1-1.404-.811l-.991.572-1-1.73.991-.573Zm3.404.688a1.5 1.5 0 1 0 0-2.999 1.5 1.5 0 0 0 0 3Z" />
    </svg>
  );
};
export { FolderSettingsLine };
