import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ZcoolLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-zcool-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M8.262 8.26C5.838 8.803 4 11.208 4 13.936a5.903 5.903 0 0 0 11.703 1.097 2 2 0 0 1 1.129-1.447c.482-.223.91-.474 1.284-.744-.863-.603-1.186-1.862-.47-2.834a9.8 9.8 0 0 0 1.391-2.651c-1.084.51-2.3.936-3.668 1.265-1.261.303-2.392-.638-2.466-1.814-1.18.572-2.67 1.01-4.642 1.452m10.995 2.934c1.166 0 1.916-.424 2.744-.587-.325 1.448-1.501 3.49-4.331 4.795a7.903 7.903 0 0 1-15.669-1.466c0-3.646 2.467-6.876 5.824-7.627C11.746 5.43 13.529 4.742 14.902 2q1.033 2 0 4.677 4.224-1.005 6.774-3.548c0 4.802-1.822 7.186-2.419 8.065m-5.84 3.932c.584.146.584.832.584 1.02v1.021c0 .562-.342.773-.844.773H7.743c-.475-.086-.734-.345-.734-.777v-.95c0-.475.216-.82.431-1.08l3.153-3.369H7.527c-.302 0-.518-.216-.518-.604-.044-.735.086-1.9.647-2.16.087 0 .087.13.087.173-.087.173 0 .302.216.302h3.887c.863 0 1.381 0 1.684-.086.13-.043.216 0 .173.13-.087.302-.044.647-.044.95 0 .993 0 1.382-.777 2.159l-2.678 2.937 2.85-.002c.316 0 .364-.146.364-.437" />
    </svg>
  );
};
export { ZcoolLine };
