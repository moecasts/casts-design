import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const QqFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-qq-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M19.914 14.529a32 32 0 0 0-.676-1.886l-.91-2.246c.002-.026.013-.468.013-.696C18.34 5.86 16.508 2 12 2S5.66 5.86 5.66 9.7c0 .229.011.671.012.697l-.91 2.246a32 32 0 0 0-.675 1.886c-.86 2.737-.581 3.87-.369 3.895.455.054 1.771-2.06 1.771-2.06 0 1.224.637 2.822 2.016 3.976-.515.157-1.147.399-1.554.695-.365.267-.319.54-.253.65.289.481 4.955.307 6.303.157 1.347.15 6.014.324 6.302-.158.066-.11.112-.382-.253-.649-.407-.296-1.039-.538-1.555-.695 1.379-1.154 2.016-2.752 2.016-3.977 0 0 1.316 2.115 1.771 2.06.212-.025.49-1.157-.37-3.894" />
    </svg>
  );
};
export { QqFill };
