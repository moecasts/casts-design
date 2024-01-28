import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const TwitterLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-twitter-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M15.35 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.562-.212c-2.053-.28-4.021-1.226-5.91-2.799-.597 3.31.57 5.603 3.383 7.372L9.4 16.014a.6.6 0 0 1 .035.993L7.843 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.013-2.141-2.94-2.141Zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.668-.645-.334 1.64-.5 2.352-1.213 3.331 0 7.642-4.697 11.358-9.464 12.309-3.267.652-8.02-.419-9.38-1.841.693-.054 3.513-.357 5.143-1.55-1.38-.91-6.868-4.14-3.261-12.823 1.693 1.977 3.41 3.323 5.15 4.037 1.157.475 1.442.466 1.973.538Z" />
    </svg>
  );
};
export { TwitterLine };
