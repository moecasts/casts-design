import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ToothLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-tooth-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M5.706 5.89C6.429 5.022 7.507 4.5 9 4.5c.907 0 1.749.267 2.454.727a4.5 4.5 0 0 1 1.74 2.137 1 1 0 1 0 1.862-.728 6.5 6.5 0 0 0-1.224-1.983q.56-.151 1.168-.153c1.493 0 2.57.522 3.294 1.39.744.893 1.206 2.264 1.206 4.11 0 2.903-.486 5.385-1.23 7.102-.785 1.812-1.667 2.398-2.27 2.398-.15 0-.275-.035-.461-.358-.226-.392-.385-.96-.592-1.72-.174-.639-.39-1.433-.752-2.062C13.787 14.652 13.1 14 12 14s-1.787.652-2.195 1.36c-.362.63-.578 1.423-.752 2.062-.207.76-.366 1.328-.592 1.72-.186.323-.311.358-.461.358-.603 0-1.485-.586-2.27-2.398-.744-1.717-1.23-4.2-1.23-7.102 0-1.846.462-3.217 1.206-4.11M12 3.232A6.5 6.5 0 0 0 9 2.5c-2.007 0-3.68.728-4.83 2.11C3.037 5.967 2.5 7.846 2.5 10c0 3.097.514 5.865 1.395 7.898C4.735 19.836 6.103 21.5 8 21.5c1.1 0 1.787-.652 2.195-1.36.374-.65.593-1.477.77-2.127.198-.726.354-1.274.574-1.655.186-.323.311-.358.461-.358s.275.035.461.358c.22.381.376.93.574 1.655.177.65.396 1.476.77 2.127.408.708 1.095 1.36 2.195 1.36 1.897 0 3.265-1.664 4.105-3.602.88-2.033 1.395-4.8 1.395-7.898 0-2.154-.538-4.033-1.67-5.39C18.68 3.228 17.008 2.5 15 2.5c-1.08 0-2.102.264-3 .732" />
    </svg>
  );
};
export { ToothLine };
