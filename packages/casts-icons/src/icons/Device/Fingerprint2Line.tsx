import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Fingerprint2Line = (initProps: IconProps) => {
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
    `${prefixCls}-fingerprint2-line`,
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
      <path d="M12 1a9 9 0 0 1 9 9v4a9 9 0 0 1-12.092 8.455q.192-.265.369-.542l.17-.28a10.9 10.9 0 0 0 1.55-5.345L11 16V9h2v7c0 1.772-.355 3.462-.997 5.002a7 7 0 0 0 2.27-.38c.442-1.36.693-2.807.724-4.308L15 16v-3.001h2V16c0 1.088-.102 2.153-.298 3.185a6.98 6.98 0 0 0 2.294-4.944L19 14v-4A7 7 0 0 0 7.808 4.394L6.383 2.968A8.96 8.96 0 0 1 12 1m-5 9a5 5 0 0 1 10 0v1h-2v-1a3 3 0 0 0-5.995-.176L9 10v6c0 1.567-.4 3.04-1.104 4.323l-.024.04q-.345.622-.782 1.179a9 9 0 0 1-1.237-.97l-.308-.3A8.97 8.97 0 0 1 3 14v-4c0-2.125.736-4.078 1.968-5.617l1.426 1.425a6.97 6.97 0 0 0-1.39 3.951L5 10v4a6.97 6.97 0 0 0 1.57 4.417 6.9 6.9 0 0 0 .426-2.176L7 16z" />
    </svg>
  );
};
export { Fingerprint2Line };
