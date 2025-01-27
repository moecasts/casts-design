import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const CodepenLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-codepen-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M16.5 13.202 13 15.535v3.596L19.197 15zM14.697 12 12 10.202 9.303 12 12 13.798zM20 10.868 18.303 12 20 13.132zM19.197 9 13 4.869v3.596l3.5 2.333zM7.5 10.798 11 8.465V4.869L4.803 9zM4.803 15 11 19.131v-3.596l-3.5-2.333zM4 13.132 5.697 12 4 10.868zM2 9a1 1 0 0 1 .445-.832l9-6a1 1 0 0 1 1.11 0l9 6A1 1 0 0 1 22 9v6a1 1 0 0 1-.445.832l-9 6a1 1 0 0 1-1.11 0l-9-6A1 1 0 0 1 2 15z" />
    </svg>
  );
};
export { CodepenLine };
