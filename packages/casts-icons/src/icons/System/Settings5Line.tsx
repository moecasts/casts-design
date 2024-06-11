import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Settings5Line = (initProps: IconProps) => {
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
    `${prefixCls}-settings5-line`,
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
      <path d="M2.212 14.06a9.945 9.945 0 0 1 .001-4.12c1.11.131 2.079-.236 2.396-1.001.316-.765-.109-1.71-.986-2.402a9.945 9.945 0 0 1 2.913-2.914c.692.878 1.637 1.303 2.402.986.765-.317 1.133-1.286 1.002-2.396a9.945 9.945 0 0 1 4.12 0c-.131 1.11.236 2.08 1.001 2.396.765.317 1.71-.108 2.402-.985a9.944 9.944 0 0 1 2.914 2.912c-.878.692-1.303 1.638-.986 2.403.317.765 1.286 1.132 2.396 1.001a9.946 9.946 0 0 1 0 4.12c-1.11-.13-2.08.237-2.396 1.002-.317.764.108 1.71.985 2.402a9.946 9.946 0 0 1-2.912 2.914c-.693-.878-1.638-1.304-2.403-.987-.765.317-1.132 1.286-1.001 2.397a9.944 9.944 0 0 1-4.12-.001c.13-1.11-.237-2.079-1.002-2.396-.765-.317-1.71.109-2.402.986a9.944 9.944 0 0 1-2.914-2.913c.878-.692 1.304-1.637.987-2.402-.317-.765-1.286-1.133-2.397-1.002ZM4 12.21c1.1.305 2.007 1.002 2.456 2.086.45 1.085.3 2.22-.262 3.212.097.102.196.201.298.298.993-.563 2.127-.712 3.212-.262 1.084.449 1.781 1.356 2.085 2.456.14.004.28.004.42 0 .305-1.1 1.002-2.007 2.087-2.456 1.084-.45 2.219-.3 3.212.262.102-.097.2-.196.297-.298-.562-.993-.711-2.127-.262-3.212.45-1.084 1.357-1.781 2.456-2.085.004-.14.004-.28 0-.421-1.1-.304-2.007-1.001-2.456-2.086-.45-1.084-.3-2.22.262-3.212a7.93 7.93 0 0 0-.297-.297c-.993.562-2.128.711-3.212.262C13.21 6.007 12.514 5.1 12.21 4a7.938 7.938 0 0 0-.42 0c-.305 1.1-1.002 2.008-2.086 2.457-1.085.45-2.22.3-3.212-.262-.102.096-.201.195-.298.297.563.993.712 2.128.262 3.212C6.007 10.79 5.1 11.485 4 11.79c-.004.14-.004.28 0 .42ZM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </svg>
  );
};
export { Settings5Line };
