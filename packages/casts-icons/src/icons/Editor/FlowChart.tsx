import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FlowChart = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-flow-chart`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M6 21.5A3.5 3.5 0 1 1 9.355 17H15v-2h2V9.242L14.757 7H9V9H3V3h6v2h5.757L18 1.756 22.243 6 19 9.241V15L21 15v6h-6v-2H9.355A3.502 3.502 0 0 1 6 21.5Zm0-5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm13 .5h-2v2h2v-2ZM18 4.586 16.586 6 18 7.414 19.414 6 18 4.586ZM7 5H5v2h2V5Z" />
    </svg>
  );
};
export { FlowChart };
