import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const WechatLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-wechat-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M10.001 14.676v-.062c0-2.509 2.017-4.618 4.753-5.233C14.39 7.079 11.96 5.2 8.9 5.2c-3.32 0-5.9 2.213-5.9 4.78 0 .969.36 1.9 1.04 2.698q.048.058.152.165a3.57 3.57 0 0 1 1.002 2.238 3.6 3.6 0 0 1 2.363-.442q.25.039.405.06a7.3 7.3 0 0 0 2.038-.023m.457 1.951a9.2 9.2 0 0 1-2.753.055 19 19 0 0 1-.454-.067 1.6 1.6 0 0 0-1.08.212l-1.904 1.147a.8.8 0 0 1-.49.118.79.79 0 0 1-.729-.851l.15-1.781a1.57 1.57 0 0 0-.439-1.223 6 6 0 0 1-.241-.262c-.954-1.12-1.517-2.502-1.517-3.996 0-3.744 3.537-6.779 7.9-6.779 4.06 0 7.403 2.627 7.85 6.008 3.371.153 6.05 2.515 6.05 5.406 0 1.193-.456 2.296-1.229 3.19q-.076.09-.195.21a1.24 1.24 0 0 0-.356.976l.121 1.423a.635.635 0 0 1-.59.68.66.66 0 0 1-.396-.094l-1.544-.917a1.32 1.32 0 0 0-.874-.169q-.22.034-.368.053-.475.061-.969.062c-2.694 0-4.998-1.408-5.943-3.401m6.977 1.31a3.3 3.3 0 0 1 1.675.174 3.25 3.25 0 0 1 .842-1.502c.05-.05.087-.09.106-.112.489-.565.743-1.213.743-1.883 0-1.805-1.903-3.414-4.4-3.414s-4.4 1.61-4.4 3.414 1.903 3.414 4.4 3.414a6 6 0 0 0 .714-.046q.121-.015.32-.046" />
    </svg>
  );
};
export { WechatLine };
