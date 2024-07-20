import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ZhihuFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-zhihu-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M13.373 18.896h1.453l.478 1.637 2.604-1.636h3.071V5.395h-7.605v13.502ZM14.92 6.86h4.515v10.571h-1.732l-1.73 1.087-.315-1.084-.738-.003V6.861Zm-2.83 4.713H8.846a70.3 70.3 0 0 0 .136-4.56h3.172s.122-1.4-.532-1.384H6.135c.217-.814.488-1.655.814-2.524 0 0-1.493 0-2.001 1.339-.21.552-.82 2.677-1.903 4.848.365-.04 1.573-.073 2.284-1.378.13-.366.156-.414.318-.902h1.79c0 .651-.074 4.151-.105 4.558h-3.24c-.728 0-.964 1.466-.964 1.466h4.065c-.272 3.095-1.737 5.703-4.392 7.764 1.27.363 2.536-.057 3.162-.614 0 0 1.425-1.297 2.206-4.298l3.345 4.03s.491-1.668-.076-2.482c-.47-.553-1.74-2.051-2.281-2.594l-.907.72c.27-.867.433-1.71.488-2.524h3.822s-.005-1.466-.47-1.466Z" />
    </svg>
  );
};
export { ZhihuFill };
