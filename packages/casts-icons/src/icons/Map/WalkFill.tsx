import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const WalkFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-walk-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m7.617 8.712 3.205-2.328A1.995 1.995 0 0 1 12.065 6a2.616 2.616 0 0 1 2.427 1.82c.186.583.356.977.51 1.181A4.992 4.992 0 0 0 19 11v2a6.986 6.986 0 0 1-5.401-2.547l-.698 3.956 2.061 1.729 2.223 6.108-1.88.684-2.039-5.604-3.39-2.845a2 2 0 0 1-.714-1.904l.509-2.885-.677.492-2.127 2.928-1.618-1.176L7.6 8.7l.017.012ZM13.5 5.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM10.53 18.681l-3.214 3.83-1.532-1.285 2.975-3.546.746-2.18 1.791 1.5-.766 1.681Z" />
    </svg>
  );
};
export { WalkFill };
