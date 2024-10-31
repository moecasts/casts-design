import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const DropperFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-dropper-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M15.536 2.807a4 4 0 0 1 5.656 5.657l-2.828 2.829.354.354a1 1 0 0 1-1.415 1.414l-.353-.354-6.215 6.215a4 4 0 0 1-2.044 1.094l-1.754.35a2 2 0 0 0-1.022.548l-.986.986a1 1 0 0 1-1.414 0L2.1 20.485a1 1 0 0 1 0-1.414l.986-.986a2 2 0 0 0 .546-1.022l.351-1.754a4 4 0 0 1 1.094-2.044l6.215-6.215-.354-.353a1 1 0 0 1 1.415-1.414l.353.353zm-2.829 5.658-6.215 6.214a2 2 0 0 0-.547 1.022l-.35 1.755A4 4 0 0 1 4.5 19.5a4 4 0 0 1 2.044-1.094l1.754-.351a2 2 0 0 0 1.022-.547l6.215-6.215z" />
    </svg>
  );
};
export { DropperFill };
