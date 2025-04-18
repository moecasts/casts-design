import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const WechatPayFill = (initProps: IconProps) => {
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
    `${prefixCls}-wechat-pay-fill`,
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
      <path d="M9.271 14.669a.66.66 0 0 1-.88-.269l-.043-.095-1.818-3.998a.5.5 0 0 1 0-.146.327.327 0 0 1 .335-.327.3.3 0 0 1 .196.066l2.18 1.527a1 1 0 0 0 .546.167.9.9 0 0 0 .342-.066l10.047-4.5a10.73 10.73 0 0 0-8.171-3.526C6.479 3.502 2 7.232 2 11.87a7.83 7.83 0 0 0 3.46 6.296.66.66 0 0 1 .24.727l-.45 1.701a1 1 0 0 0-.051.24.327.327 0 0 0 .334.334.4.4 0 0 0 .19-.058l2.18-1.265c.16-.098.343-.151.53-.152q.15 0 .292.043c1.062.3 2.16.452 3.264.45 5.525 0 10.011-3.729 10.011-8.33a7.23 7.23 0 0 0-1.098-3.883L9.351 14.625z" />
    </svg>
  );
};
export { WechatPayFill };
