import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const GitlabFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-gitlab-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m21.663 9.987-.028-.072-2.719-7.094a.71.71 0 0 0-.706-.449.711.711 0 0 0-.654.522L15.72 8.52H8.282L6.443 2.895a.711.711 0 0 0-.652-.524.72.72 0 0 0-.707.45L2.362 9.925l-.028.07a5.057 5.057 0 0 0 1.674 5.838l.01.007.024.019 4.147 3.104 2.05 1.553 1.247.944a.842.842 0 0 0 1.016 0l1.247-.944 2.05-1.553 4.172-3.123.01-.008a5.055 5.055 0 0 0 1.682-5.845Z" />
    </svg>
  );
};
export { GitlabFill };
