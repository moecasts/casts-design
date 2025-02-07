import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FontSizeAi = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-font-size-ai`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m19.467 8.694.246-.566a4.36 4.36 0 0 1 2.22-2.25l.759-.339a.53.53 0 0 0 0-.963l-.717-.319a4.37 4.37 0 0 1-2.251-2.326l-.253-.611a.506.506 0 0 0-.942 0l-.253.61a4.37 4.37 0 0 1-2.25 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.36 4.36 0 0 1 2.219 2.251l.246.566c.18.414.753.414.934 0M4.754 15h6.492l2 5H15.4L9 4H7L.6 20h2.154zM8 6.885 10.446 13H5.554zM21 12v.535a4 4 0 1 0 0 6.93V20h2v-8zm0 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
    </svg>
  );
};
export { FontSizeAi };
