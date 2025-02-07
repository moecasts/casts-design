import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const EdgeNewLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-edge-new-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M6.949 18.204C6.3 16.775 6 15.201 6 14c0-1.496.59-3.093 1.603-4.323.64-.778 1.474-1.436 2.465-1.818q-.72-.107-1.568-.109C5.99 7.75 4 9.612 4 12a7.99 7.99 0 0 0 2.949 6.204M12 20a8 8 0 0 0 2.649-.449c-3.364-.557-5.648-2.613-6.62-4.963.095 1.026.43 2.296 1.03 3.357C9.776 19.217 10.752 20 12 20m4.5-8q-.001.71-.188 1.315.309.034.688.035c1.776 0 3-1.234 3-2.85C20 7.37 16.704 4 12 4a7.97 7.97 0 0 0-5.272 1.983A6.8 6.8 0 0 1 8.5 5.75c2.407 0 4.396.601 5.807 1.715C15.737 8.595 16.5 10.198 16.5 12M12 9.5A2.5 2.5 0 0 0 9.5 12c0 2.5 2.3 5.7 7 5.7.442 0 .84-.031 1.196-.082a7.4 7.4 0 0 0 1.736-.468q.197-.08.347-.147c.209-.09.352-.153.437-.153.184 0 .284.1.284.3 0 .156-.07.276-.284.563l-.142.19-.073.097a10 10 0 0 1-1.365 1.48A9.96 9.96 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4 10 8.5c0 2.8-2.2 4.85-5 4.85-2 0-3.4-.65-3.4-1.35 0-.14.11-.254.252-.404.266-.28.648-.684.648-1.596A2.5 2.5 0 0 0 12 9.5" />
    </svg>
  );
};
export { EdgeNewLine };
