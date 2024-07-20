import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const MastodonFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-mastodon-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M21.26 13.99c-.275 1.41-2.457 2.955-4.963 3.254-1.306.156-2.593.3-3.965.236-2.244-.103-4.014-.535-4.014-.535 0 .218.014.426.04.62.292 2.215 2.196 2.347 4 2.41 1.82.061 3.44-.45 3.44-.45l.075 1.646s-1.273.684-3.54.81c-1.252.068-2.805-.032-4.613-.51-3.923-1.039-4.598-5.22-4.701-9.464-.032-1.26-.012-2.447-.012-3.44 0-4.34 2.843-5.611 2.843-5.611C7.283 2.298 9.742 2.021 12.3 2h.062c2.557.02 5.018.298 6.451.956 0 0 2.843 1.272 2.843 5.61 0 0 .036 3.201-.396 5.424Zm-2.957-5.087c0-1.074-.274-1.927-.823-2.558-.566-.631-1.307-.955-2.228-.955-1.065 0-1.872.41-2.405 1.228l-.518.87-.519-.87C11.277 5.8 10.47 5.39 9.406 5.39c-.921 0-1.663.324-2.229.955-.549.631-.822 1.484-.822 2.558v5.253h2.081V9.057c0-1.075.452-1.62 1.357-1.62 1 0 1.501.647 1.501 1.927v2.79h2.07v-2.79c0-1.28.5-1.927 1.5-1.927.905 0 1.358.545 1.358 1.62v5.1h2.08V8.902Z" />
    </svg>
  );
};
export { MastodonFill };
