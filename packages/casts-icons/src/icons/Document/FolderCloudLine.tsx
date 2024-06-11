import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FolderCloudLine = (initProps: IconProps) => {
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
    `${prefixCls}-folder-cloud-line`,
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
      <path d="M3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h7v-2H4V5h5.586l2 2H20v4h2V6a1 1 0 0 0-1-1h-8.586l-2-2H3Zm9 15.25c0-1.26.847-2.32 2.002-2.647C13.944 13.658 15.552 12 17.5 12c1.948 0 3.555 1.658 3.498 3.603A2.751 2.751 0 0 1 20.25 21h-5.5A2.75 2.75 0 0 1 12 18.25ZM17.5 14a1.5 1.5 0 0 0-1.5 1.5c0 .464.024.975.057 1.46-.964.205-2.057.592-2.057 1.29 0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75c0-.698-1.093-1.085-2.057-1.29.033-.485.057-.996.057-1.46a1.5 1.5 0 0 0-1.5-1.5Z" />
    </svg>
  );
};
export { FolderCloudLine };
