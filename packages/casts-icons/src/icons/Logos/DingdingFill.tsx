import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const DingdingFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-dingding-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m4.49 9.04-.006.014c-.42.898-1.516 2.66-1.516 2.66l-.005-.012-.32.558h1.543l-2.948 3.919.67-2.666h-1.215l.422-1.763c-.341.082-.745.195-1.223.349 0 0-.646.378-1.862-.729 0 0-.82-.722-.344-.902.202-.077.981-.175 1.595-.257a80 80 0 0 1 1.338-.172s-2.555.039-3.161-.057c-.606-.095-1.375-1.107-1.539-1.996 0 0-.253-.488.545-.257s4.101.9 4.101.9S8.27 9.312 7.983 8.99c-.286-.32-.841-1.754-.769-2.634 0 0 .031-.22.257-.16 0 0 3.176 1.45 5.347 2.245s4.06 1.199 3.816 2.228c-.02.087-.072.216-.144.37" />
    </svg>
  );
};
export { DingdingFill };
