import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const PinterestLine = (initProps: IconProps) => {
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
    `${prefixCls}-pinterest-line`,
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
      <path d="M8.492 19.191q.035-.505.143-1.001c.063-.295.254-1.13.534-2.34l.007-.03.387-1.668c.079-.34.14-.604.181-.692a3.5 3.5 0 0 1-.284-1.423c0-1.337.756-2.373 1.736-2.373.36-.006.704.15.942.426s.348.643.302.996c0 .453-.085.798-.453 2.035a28 28 0 0 0-.165.571c-.052.188-.096.358-.133.522-.096.386-.008.797.237 1.105a1.2 1.2 0 0 0 1.006.457c1.492 0 2.6-1.985 2.6-4.548 0-1.97-1.29-3.274-3.432-3.274A3.88 3.88 0 0 0 9.201 9.1a4.13 4.13 0 0 0-1.195 2.961 2.55 2.55 0 0 0 .512 1.644c.181.14.25.383.175.59-.041.168-.14.552-.177.68a.41.41 0 0 1-.215.297.39.39 0 0 1-.355.002c-1.16-.479-1.796-1.778-1.796-3.44 0-2.985 2.491-5.584 6.192-5.584 3.135 0 5.481 2.329 5.481 5.14 0 3.532-1.932 6.104-4.69 6.104a2.5 2.5 0 0 1-2.046-.959l-.043.177-.207.852-.002.008c-.146.6-.248 1.017-.288 1.173q-.16.534-.4 1.04a8 8 0 1 0-1.655-.593M12 22c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10" />
    </svg>
  );
};
export { PinterestLine };
