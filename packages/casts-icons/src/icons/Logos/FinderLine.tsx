import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FinderLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-finder-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M21.001 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-10.52 1.999L4.002 5v14h8.746a25 25 0 0 1-.163-1.02q-.445.02-.583.02c-2.208 0-4.398-.73-6.555-2.168l1.11-1.664C8.399 15.397 10.209 16 12 16q.199 0 .398-.01a24 24 0 0 1 .007-1.99H9.501v-1c0-3.275.32-5.94.98-8.001m2.12 0c-.665 1.583-1.044 4.412-1.09 7.001h3.123l-.14 1.124q-.152 1.207-.108 2.52 1.518-.449 3.06-1.476l1.11 1.664q-1.98 1.321-3.993 1.84.086.65.219 1.327L20 19V5zM7.001 7a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1m10 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1" />
    </svg>
  );
};
export { FinderLine };
