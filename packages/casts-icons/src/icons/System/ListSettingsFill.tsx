import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ListSettingsFill = (initProps: IconProps) => {
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
    `${prefixCls}-list-settings-fill`,
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
      <path d="M2 18h7v2H2v-2Zm0-7h9v2H2v-2Zm0-7h20v2H2V4Zm18.674 9.025 1.156-.391 1 1.732-.916.805a4.014 4.014 0 0 1 0 1.658l.916.805-1 1.732-1.156-.391c-.41.37-.898.654-1.435.83L19 21h-2l-.24-1.196a3.997 3.997 0 0 1-1.434-.83l-1.156.392-1-1.732.916-.805a4.014 4.014 0 0 1 0-1.658l-.916-.805 1-1.732 1.156.391c.41-.37.898-.655 1.435-.83L17 11h2l.24 1.196c.536.175 1.024.46 1.434.83ZM18 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </svg>
  );
};
export { ListSettingsFill };
