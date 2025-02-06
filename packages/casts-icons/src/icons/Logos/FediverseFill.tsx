import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FediverseFill = (initProps: IconProps) => {
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
    `${prefixCls}-fediverse-fill`,
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
      <path d="M11.268 1.555v.615l.252 4.016L8.17 3.959l-.533-.308-.733 1.27.534.307 3.603 1.79-3.603 1.788-.534.307.733 1.27.533-.308 3.351-2.227-.252 4.016v.615h1.465v-.615l-.253-4.016 3.351 2.227.533.307.733-1.269-.533-.307-3.604-1.789 3.604-1.789.533-.308-.733-1.269-.533.308-3.351 2.227.253-4.016v-.615zm-5.296 9.172v.615l.253 4.015-3.351-2.226-.533-.308-.733 1.27.533.307 3.605 1.789-3.605 1.788-.533.308.733 1.27.533-.308 3.351-2.227-.253 4.015v.616h1.465v-.616l-.252-4.015 3.351 2.227.533.307.733-1.269-.533-.308-3.604-1.788 3.604-1.79.533-.307-.733-1.27-.533.309-3.351 2.226.253-4.015v-.615zm10.59 0v.615l.253 4.015-3.35-2.226-.533-.308-.733 1.27.532.307 3.605 1.789-3.605 1.788-.532.308.733 1.27.532-.308 3.351-2.227-.253 4.015v.616h1.466v-.616l-.253-4.015 3.352 2.227.532.307.733-1.269-.533-.308-3.604-1.788 3.604-1.79.533-.307-.733-1.27-.532.309-3.352 2.226.253-4.015v-.615z" />
    </svg>
  );
};
export { FediverseFill };
