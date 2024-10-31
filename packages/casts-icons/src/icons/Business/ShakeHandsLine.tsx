import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ShakeHandsLine = (initProps: IconProps) => {
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
    `${prefixCls}-shake-hands-line`,
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
      <path d="M11.861 2.39a3 3 0 0 1 3.275-.034L19.29 5H21a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-1.52a2.65 2.65 0 0 1-1.285 2.449l-5.093 3.056a2 2 0 0 1-2.07-.008c-.7.62-1.779.688-2.561.073l-5.14-4.039a2 2 0 0 1-.565-2.446A2 2 0 0 1 2 13.51V6a1 1 0 0 1 1-1h4.947zM4.173 13.646l.692-.605a3 3 0 0 1 4.195.24l2.702 2.972a3 3 0 0 1 .396 3.487l5.009-3.005a.66.66 0 0 0 .278-.79l-4.427-6.198a1 1 0 0 0-1.101-.377l-2.486.745a3 3 0 0 1-2.983-.752l-.293-.292A2 2 0 0 1 5.68 7H4v6.51zm9.89-9.602a1 1 0 0 0-1.093.012l-5.4 3.6.292.293a1 1 0 0 0 .995.25l2.485-.745a3 3 0 0 1 3.303 1.13L18.515 14H20V7h-.709a2 2 0 0 1-1.074-.313zM6.181 14.545l-1.616 1.414 5.14 4.039.705-1.232a1 1 0 0 0-.129-1.169L7.58 14.625a1 1 0 0 0-1.398-.08" />
    </svg>
  );
};
export { ShakeHandsLine };
