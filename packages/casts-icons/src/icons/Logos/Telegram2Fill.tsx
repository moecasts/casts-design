import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Telegram2Fill = (initProps: IconProps) => {
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
    `${prefixCls}-telegram2-fill`,
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
      <path d="M2.148 11.81q7.87-3.429 10.497-4.522c4.999-2.079 6.037-2.44 6.714-2.452.15-.003.482.034.698.21.182.147.232.347.256.487s.054.459.03.708c-.27 2.847-1.443 9.754-2.04 12.942-.252 1.348-.748 1.8-1.23 1.845-1.045.096-1.838-.69-2.85-1.354-1.585-1.039-2.48-1.686-4.018-2.699-1.777-1.171-.625-1.815.388-2.867.265-.275 4.87-4.464 4.96-4.844.01-.048.021-.225-.084-.318-.105-.094-.26-.062-.373-.036q-.239.054-7.592 5.018-1.079.74-1.952.721c-.643-.014-1.88-.363-2.798-.662-1.128-.367-2.024-.56-1.946-1.183q.061-.486 1.34-.994" />
    </svg>
  );
};
export { Telegram2Fill };
