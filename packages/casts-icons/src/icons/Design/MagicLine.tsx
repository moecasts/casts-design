import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const MagicLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-magic-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M15.199 9.944a2.6 2.6 0 0 1-.79-1.55l-.403-3.083-2.731 1.486a2.6 2.6 0 0 1-1.719.272L6.5 6.5l.57 3.056a2.6 2.6 0 0 1-.273 1.72l-1.486 2.73 3.083.403a2.6 2.6 0 0 1 1.55.79l2.138 2.257 1.336-2.807a2.6 2.6 0 0 1 1.23-1.231l2.808-1.336-2.257-2.138Zm.025 5.564-2.213 4.65a.6.6 0 0 1-.977.155l-3.542-3.739a.6.6 0 0 0-.358-.182l-5.106-.668a.6.6 0 0 1-.45-.881l2.462-4.524a.6.6 0 0 0 .063-.396L4.16 4.86a.6.6 0 0 1 .7-.7l5.062.943a.6.6 0 0 0 .397-.063l4.523-2.46a.6.6 0 0 1 .882.448l.668 5.107a.6.6 0 0 0 .182.357l3.739 3.542a.6.6 0 0 1-.155.977l-4.65 2.213a.6.6 0 0 0-.284.284Zm.797 1.927 1.414-1.414 4.242 4.242-1.414 1.415-4.242-4.243Z" />
    </svg>
  );
};
export { MagicLine };
