import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ThreadsLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-threads-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M12.184 1.41h-.002C9.09 1.432 6.7 2.473 5.094 4.516c-1.428 1.815-2.16 4.348-2.184 7.49v.002c.025 3.143.756 5.662 2.184 7.477 1.606 2.042 4.009 3.084 7.1 3.105h.002c2.748-.019 4.697-.74 6.303-2.344 2.104-2.103 2.042-4.741 1.347-6.363-.53-1.234-1.575-2.221-2.976-2.835-.18-2.985-1.86-4.726-4.62-4.744-1.63-.01-3.102.72-4.003 2.087l1.655 1.136c.533-.809 1.377-1.199 2.335-1.19 1.387.009 2.3.774 2.555 2.117a11.738 11.738 0 0 0-2.484-.105c-2.64.152-4.368 1.712-4.253 3.875.12 2.262 2.312 3.495 4.393 3.381 2.492-.137 3.973-1.976 4.324-4.321.577.373 1.003.85 1.244 1.413.44 1.025.468 2.716-.915 4.098-1.217 1.216-2.68 1.746-4.912 1.762-2.475-.018-4.332-.811-5.537-2.343C5.52 16.774 4.928 14.688 4.906 12c.022-2.688.614-4.775 1.746-6.213 1.205-1.533 3.062-2.325 5.537-2.344 2.493.019 4.384.815 5.636 2.356.691.85 1.124 1.866 1.413 2.915l1.94-.517c-.363-1.338-.937-2.613-1.815-3.694-1.653-2.034-4.081-3.071-7.18-3.093Zm.236 10.968a9.372 9.372 0 0 1 2.432.156c-.14 1.578-.793 2.947-2.512 3.041-1.112.063-2.237-.434-2.292-1.461-.04-.764.525-1.63 2.372-1.736Z" />
    </svg>
  );
};
export { ThreadsLine };
