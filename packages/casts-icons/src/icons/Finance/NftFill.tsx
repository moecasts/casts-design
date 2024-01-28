import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const NftFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-nft-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M9 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-11 9.5 5.5v11L12 23l-9.5-5.5v-11L12 1ZM4.5 7.653v8.694l2.372 1.373 8.073-5.92 4.555 2.734v-6.88L12 3.31 4.5 7.653Z" />
    </svg>
  );
};
export { NftFill };
