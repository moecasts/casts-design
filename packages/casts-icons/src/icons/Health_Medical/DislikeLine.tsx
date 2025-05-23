import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const DislikeLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-dislike-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m2.808 1.393 18.385 18.385-1.415 1.414-3.746-3.747L12 21.485l-8.478-8.492a6 6 0 0 1 .033-8.023L1.394 2.808zm2.172 10.23L12 18.654l2.618-2.623-9.646-9.645a4 4 0 0 0 .008 5.237m15.263-6.866a6 6 0 0 1 .236 8.236l-1.635 1.636-1.414-1.414 1.59-1.592a4 4 0 0 0-5.683-5.606l-1.335 1.198-1.336-1.197a4 4 0 0 0-1.155-.723l-2.25-2.25A6 6 0 0 1 12 4.53a6 6 0 0 1 8.242.228" />
    </svg>
  );
};
export { DislikeLine };
