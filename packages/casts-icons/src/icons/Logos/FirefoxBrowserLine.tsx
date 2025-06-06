import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FirefoxBrowserLine = (initProps: IconProps) => {
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
    `${prefixCls}-firefox-browser-line`,
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
      <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12c0-3.156 1.249-5.695 3.5-7.312.409-.294.842-.508 1.315-.741.22-.108.447-.22.685-.347v1.9s2.598-1.28 2.95-1.35a12 12 0 0 1-.135.482C10.119 5.3 9.8 6.394 9.8 7q0 .317.045.564c.287.226.532.514.775.8l.165.193c.443.51 1.256 1.04 1.764 1.37.264.173.445.29.446.323 0 .277-.645 1.268-1.495 1.268-2.17 0-3.066 0-2.5 1.63.475 1.37 1.75 2.102 3 2.102 1.5 0 2.9-1.245 2.9-2.75 0-1.776-.875-2.573-1.738-3.36C12.326 8.379 11.5 7.627 11.5 6c0-2.4 2-4.1 3.8-5.15.48 1.663 1.652 2.66 2.883 3.707C20.025 6.124 22 7.805 22 12M5.5 7.4C4.456 8.668 4 10.343 4 11.986 4 16.413 7.578 20 12.003 20a8.03 8.03 0 0 0 7.909-6.639c.186-1.425.122-2.83-.362-4.111l-1.05.226c0-1.947-1.169-2.981-2.318-3.998-.608-.538-1.21-1.071-1.632-1.732-.91.876-1.287 1.504-1.287 2.254 0 .895.63 1.272 1.749 1.94.479.287 1.047.627 1.694 1.083l-.995.274c.745.962 1.187 2.037 1.187 3.203 0 2.5-2.237 4.717-4.895 4.75-2.653.033-5.163-2.176-5.163-4.812C6.84 11.8 7 10.2 9.1 9.68c-.221-.33-.787-.83-1.1-1.03-.083-.29-.2-1.05-.2-1.05L5.5 8.7z" />
    </svg>
  );
};
export { FirefoxBrowserLine };
