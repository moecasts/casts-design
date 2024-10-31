import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Movie2AiLine = (initProps: IconProps) => {
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
    `${prefixCls}-movie2-ai-line`,
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
      <path d="m20.713 8.128-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10h8v-2h-1.999a10 10 0 0 0 2-2A9.96 9.96 0 0 0 22 12q0-.604-.07-1.19l-1.986.235q.056.47.056.955a7.98 7.98 0 0 1-2.708 6A8 8 0 1 1 14 4.252l.498-1.937C13.698 2.109 12.861 2 12 2m-2 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0m-4 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0m8 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0m-4 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
    </svg>
  );
};
export { Movie2AiLine };
