import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const TimeZoneLine = (initProps: IconProps) => {
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
    `${prefixCls}-time-zone-line`,
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
      <path d="M4 12c0-2.154.851-4.109 2.235-5.547.122.111.227.252.306.43.204.457.204.928.204 1.345 0 .328 0 .64.105.865.144.308.766.44 1.315.554l.02.005c.19.04.385.08.563.13.506.14.898.595 1.211.96.13.151.323.374.42.43.05-.036.211-.211.29-.498.062-.22.044-.414-.045-.52-.56-.66-.529-1.93-.356-2.399.272-.739 1.122-.684 1.744-.644h.006c.23.015.446.03.608.009.471-.06.695-.616.835-.964.045-.111.081-.201.114-.246.265-.363 1.024-.892 1.577-1.265a8.02 8.02 0 0 1 4.424 4.779c.854.29 1.642.72 2.339 1.263C21.272 5.785 17.078 2 12 2 6.477 2 2 6.477 2 12c0 5.078 3.785 9.272 8.687 9.915a8 8 0 0 1-1.263-2.339A8 8 0 0 1 4 12m13 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-6 4a6 6 0 1 1 12 0 6 6 0 0 1-12 0m5-3v4h4v-2h-2v-2z" />
    </svg>
  );
};
export { TimeZoneLine };
