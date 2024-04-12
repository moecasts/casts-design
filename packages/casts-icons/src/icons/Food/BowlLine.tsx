import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const BowlLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-bowl-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M8 1.5a1 1 0 0 0-2 0v1.018c.004.044.005.063-.207.275l-.02.02C5.506 3.079 5 3.583 5 4.5v1a1 1 0 0 0 2 0V4.482c-.004-.044-.005-.063.207-.275l.02-.02C7.494 3.921 8 3.417 8 2.5v-1Zm11 0a1 1 0 1 0-2 0v1.018c.004.044.005.063-.207.275l-.02.02c-.267.266-.773.77-.773 1.687v1a1 1 0 1 0 2 0V4.482c-.004-.044-.005-.063.207-.275l.02-.02c.267-.266.773-.77.773-1.687v-1Zm-6.5-1a1 1 0 0 1 1 1v1c0 .916-.506 1.42-.773 1.687l-.02.02c-.212.212-.21.231-.208.275l.001.018v1a1 1 0 1 1-2 0v-1c0-.916.506-1.42.773-1.687l.02-.02c.212-.212.21-.231.208-.275L11.5 2.5v-1a1 1 0 0 1 1-1ZM4 10h16a8 8 0 1 1-16 0ZM3 8a1 1 0 0 0-1 1v1c0 4.1 2.468 7.625 6 9.168V20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-.832c3.532-1.543 6-5.067 6-9.168V9a1 1 0 0 0-1-1H3Z" />
    </svg>
  );
};
export { BowlLine };
