import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const LinkUnlinkM = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-link-unlink-m`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m17.657 14.828-1.414-1.414L17.657 12A4 4 0 1 0 12 6.343l-1.414 1.414-1.414-1.414 1.414-1.414a6 6 0 0 1 8.485 8.485zm-2.828 2.829-1.415 1.414a6 6 0 0 1-8.485-8.485l1.414-1.414 1.414 1.414L6.343 12A4 4 0 0 0 12 17.657l1.414-1.414zm0-9.9 1.414 1.415-7.071 7.07-1.415-1.414zM5.775 2.293l1.932-.518L8.743 5.64l-1.932.518zm9.483 16.068 1.932-.518 1.035 3.864-1.932.518zM2.293 5.775l3.864 1.036-.518 1.931-3.864-1.035zm16.068 9.483 3.864 1.035-.518 1.932-3.864-1.036z" />
    </svg>
  );
};
export { LinkUnlinkM };
