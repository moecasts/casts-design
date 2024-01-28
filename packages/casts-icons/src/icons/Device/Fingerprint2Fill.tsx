import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Fingerprint2Fill = (initProps: IconProps) => {
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
    `${prefixCls}-fingerprint2-fill`,
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
      <path d="M12 1a9 9 0 0 1 9 9v4a8.989 8.989 0 0 1-3.811 7.355c.527-1.692.811-3.49.811-5.355v-2.001h-2V16l-.003.315a15.93 15.93 0 0 1-1.431 6.315 9.055 9.055 0 0 1-3.576.314A12.925 12.925 0 0 0 13 16V9h-2v7l-.004.288c-.059 2.301-.825 4.426-2.088 6.167a8.988 8.988 0 0 1-2.625-1.503A7.962 7.962 0 0 0 8 16v-6l.005-.2c.033-.667.229-1.29.549-1.832L7.109 6.523A5.973 5.973 0 0 0 6 10v6l-.004.225a5.966 5.966 0 0 1-1.12 3.272A8.952 8.952 0 0 1 3 14v-4a9 9 0 0 1 9-9Zm0 3c-1.296 0-2.496.41-3.476 1.11l1.444 1.444A4 4 0 0 1 16 10v2h2v-2a6 6 0 0 0-6-6Z" />
    </svg>
  );
};
export { Fingerprint2Fill };
