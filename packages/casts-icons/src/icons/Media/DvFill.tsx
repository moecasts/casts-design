import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const DvFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-dv-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M4 14.745a7 7 0 1 1 8 0V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zM8 14A5 5 0 1 0 8 4a5 5 0 0 0 0 10m-1 4v2h2v-2zm1-6a3 3 0 1 1 0-6 3 3 0 0 1 0 6m6 5v-1.292A8.98 8.98 0 0 0 17 9a8.97 8.97 0 0 0-2.292-6H21a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1zm4-10v2h2V7z" />
    </svg>
  );
};
export { DvFill };
