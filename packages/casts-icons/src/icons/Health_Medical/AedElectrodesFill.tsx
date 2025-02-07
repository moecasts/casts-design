import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const AedElectrodesFill = (initProps: IconProps) => {
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
    `${prefixCls}-aed-electrodes-fill`,
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
      <path d="M8 3a1 1 0 0 0-1 1v3H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h5v2h2v-2h5a1 1 0 0 0 1-1v-3h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm9 12V8a1 1 0 0 0-1-1H9V5h10v10z" />
    </svg>
  );
};
export { AedElectrodesFill };
