import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const SyringeFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-syringe-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m21.678 7.98-1.414 1.413-2.122-2.12-2.121 2.12 3.536 3.536-1.415 1.414-.707-.707L11.071 20H5.414l-2.12 2.121-1.415-1.414L4 18.586v-5.657l6.364-6.364-.707-.707 1.414-1.414 3.536 3.535 2.121-2.121-2.121-2.121 1.414-1.415 5.657 5.657Zm-12.02 6.363-2.83-2.828-1.414 1.414 2.829 2.828 1.414-1.414Zm2.828-2.828L9.656 8.686l-1.414 1.415 2.828 2.828 1.415-1.414Z" />
    </svg>
  );
};
export { SyringeFill };
