import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const WechatChannelsFill = (initProps: IconProps) => {
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
    `${prefixCls}-wechat-channels-fill`,
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
      <path d="M19.194 3.181c1.162-.47 2.155-.019 2.672 1.277C23.26 7.944 20 21.133 17.441 21.133c-.828 0-1.657-.688-2.624-1.926a23 23 0 0 1-1.357-1.974c-.374-.6-.742-1.232-1.095-1.87L12 14.69l-.018.032a44 44 0 0 1-1.442 2.511c-.467.75-.922 1.416-1.358 1.974-.966 1.238-1.795 1.926-2.623 1.926C4 21.133.74 7.943 2.133 4.458 2.651 3.162 3.644 2.71 4.806 3.18c.842.34 1.772 1.156 2.81 2.376A32 32 0 0 1 9.548 8.11a59 59 0 0 1 2.137 3.36l.316.538.316-.538a62 62 0 0 1 1.696-2.71l.44-.65a32 32 0 0 1 1.931-2.553c1.039-1.22 1.968-2.035 2.81-2.376M4.324 4.353c-.49-.199-.743-.084-1.005.57-.457 1.145-.265 4.028.413 7.264l.158.724.174.733c.856 3.46 2.087 6.224 2.495 6.224.28 0 .889-.506 1.615-1.436.405-.518.835-1.148 1.28-1.863.362-.581.72-1.194 1.063-1.816l.415-.767.348-.671-.364-.638-.332-.566a58 58 0 0 0-2.09-3.287 31 31 0 0 0-1.852-2.45c-.916-1.077-1.716-1.778-2.318-2.021m16.356.57c-.261-.654-.514-.769-1.005-.57-.602.243-1.402.944-2.317 2.02a31 31 0 0 0-1.852 2.45 56 56 0 0 0-1.687 2.615l-.574.962-.527.915.181.35.245.465c.445.832.919 1.664 1.401 2.438a22 22 0 0 0 1.28 1.864c.727.93 1.336 1.436 1.616 1.436.408 0 1.639-2.763 2.494-6.224l.174-.733c.805-3.523 1.063-6.758.571-7.987" />
    </svg>
  );
};
export { WechatChannelsFill };
