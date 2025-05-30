import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const GitlabLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-gitlab-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M5.544 2.673a1.55 1.55 0 0 1 1.8.097v.001c.246.198.426.466.515.769l1.446 4.428h5.39L16.14 3.54c.089-.303.268-.571.515-.769l.004-.004a1.55 1.55 0 0 1 1.795-.095l.002.001c.274.174.486.43.605.732l.004.01 2.473 6.451a5.45 5.45 0 0 1-1.813 6.303l-6.73 5.064h-.002a1.66 1.66 0 0 1-2 0l-6.731-5.065a5.45 5.45 0 0 1-1.806-6.294l2.48-6.469c.12-.302.333-.558.607-.732m.811 2.063L4.16 10.464c-.28.737-.337 1.604-.12 2.362.217.755.671 1.42 1.295 1.896l6.66 5.01 6.653-5.005a3.65 3.65 0 0 0 1.308-1.904c.22-.76.159-1.638-.123-2.378l-2.189-5.71L16 9.769H8z" />
    </svg>
  );
};
export { GitlabLine };
