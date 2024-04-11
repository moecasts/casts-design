import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const DropboxLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-dropbox-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m8.65 17.26 3.392 2.162 3.392-2.161 1.86 1.185-5.252 3.346-5.252-3.346 1.86-1.185Zm-.876-8.28 2.393-1.553L7.74 5.854 5.286 7.37l2.488 1.61Zm1.84 1.19 2.39 1.548 2.391-1.547-2.39-1.552-2.392 1.552Zm4.231 2.74 2.424 1.568 2.45-1.502-2.486-1.612-2.388 1.545Zm-1.84-6.675 4.236-2.748 6.225 3.843-4.393 2.843 4.394 2.851-6.227 3.818-4.235-2.741-4.236 2.74-6.229-3.817 4.395-2.851L1.543 7.33l6.225-3.843 4.236 2.748Zm1.836 1.192 2.394 1.553 2.488-1.61-2.455-1.517-2.427 1.574Zm-3.677 5.482-2.39-1.546-2.485 1.613 2.451 1.502 2.424-1.569Z" />
    </svg>
  );
};
export { DropboxLine };
