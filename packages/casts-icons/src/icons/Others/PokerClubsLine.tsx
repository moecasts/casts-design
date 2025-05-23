import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const PokerClubsLine = (initProps: IconProps) => {
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
    `${prefixCls}-poker-clubs-line`,
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
      <path d="M8.236 7.46c.338 1.08.99 2.092 1.627 3.044l.15.222q.23.342.447.673s-.557-.43-.808-.626c-1.125-.88-1.925-1.506-2.938-1.705A3.7 3.7 0 0 0 6 9a4 4 0 0 0 0 8c.676 0 1.353-.183 2.039-.48.683-.295 1.376-.703 2.09-1.155-.017.971-.134 1.78-.33 2.521-.247.93-.618 1.755-1.07 2.668A.997.997 0 0 0 9.617 22h4.764c.743 0 1.22-.78.89-1.446-.453-.913-.824-1.738-1.07-2.668a10.3 10.3 0 0 1-.33-2.521c.713.452 1.406.86 2.09 1.155.685.297 1.362.48 2.038.48a4 4 0 0 0 0-8q-.399 0-.752.075c-.995.207-1.789.829-2.9 1.698-.251.197-.808.626-.808.626l.233-.357.002-.002v-.001l.355-.544c.674-1.043 1.28-2.04 1.61-3.024.164-.493.26-.982.26-1.471a4 4 0 0 0-8 0c0 .5.088.987.236 1.46m5.222.26c-.35.682-.808 1.383-1.356 2.223L12 10.1l-.38-.57c-.381-.566-.72-1.07-1.022-1.63C10.188 7.141 10 6.534 10 6a2 2 0 1 1 4 0c0 .414-.147.954-.542 1.72M10.496 13.4A2 2 0 0 0 12 12.675a2 2 0 0 0 1.504.723A2 2 0 0 0 12 14.66a2 2 0 0 0-1.504-1.261m.69 6.601c.367-.889.657-1.822.814-2.927.157 1.105.447 2.038.815 2.927zm2.723-6.635c.544-.102.993-.467 1.421-.816q.127-.103.25-.2C17.06 11.19 17.416 11 18 11a2 2 0 1 1 0 4c-.699 0-1.594-.396-3.056-1.324a2 2 0 0 0-1.035-.311M6 11c.585 0 .94.19 2.42 1.348q.124.098.25.201c.428.349.877.714 1.422.816-.361.006-.72.11-1.036.31C7.594 14.605 6.7 15 6 15a2 2 0 1 1 0-4" />
    </svg>
  );
};
export { PokerClubsLine };
