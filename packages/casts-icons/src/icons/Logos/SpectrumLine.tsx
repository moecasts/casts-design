import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const SpectrumLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-spectrum-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m11.389 2.001 1.81.005.844.014c7.162.165 7.939 1.512 7.957 9.667l-.005 1.512-.014.844c-.165 7.161-1.512 7.938-9.667 7.957l-1.512-.006-.888-.015c-6.854-.163-7.828-1.427-7.907-8.78L2 11.691l.006-.89.014-.865c.165-7.053 1.486-7.897 9.368-7.935M14.12 4.01 10.883 4l-1.322.01c-5.489.082-5.544.82-5.56 7.403l.002 2.175.01 1.04c.088 4.983.793 5.343 6.399 5.37l3.455-.002.776-.01c5.108-.091 5.346-.836 5.357-6.877l-.002-2.742-.012-1.056c-.094-4.796-.785-5.25-5.866-5.303M8.25 7A8.75 8.75 0 0 1 17 15.75v.583a.667.667 0 0 1-.666.667h-3.667a.667.667 0 0 1-.666-.667v-.583A3.75 3.75 0 0 0 8.25 12h-.584a.667.667 0 0 1-.666-.667V7.667C7 7.299 7.299 7 7.667 7z" />
    </svg>
  );
};
export { SpectrumLine };
