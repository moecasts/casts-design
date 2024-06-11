import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FlickrLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-flickr-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M6 17A5 5 0 1 0 6 7a5 5 0 0 0 0 10Zm3-5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm9 5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm3-5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
};
export { FlickrLine };
