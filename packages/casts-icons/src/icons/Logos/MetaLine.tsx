import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const MetaLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-meta-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M20.974 16.164q-.427 1.335-1.47 1.336-1.316 0-2.587-1.58-.883-1.096-2.477-4.168a58 58 0 0 0-1.269-2.33q.465-.732.829-1.176Q15.436 6.5 17.005 6.5q1.252 0 2.386 1.608 1.164 1.651 1.632 4.08.46 2.391-.049 3.975m-8.97-4.734q.315.578.66 1.242 1.687 3.25 2.695 4.503 1.872 2.325 4.146 2.325 1.284 0 2.197-.81.787-.7 1.177-1.916.665-2.07.108-4.963-.549-2.852-1.962-4.856Q19.294 4.5 17.005 4.5q-2.514 0-4.55 2.476-.213.259-.45.594a10 10 0 0 0-.45-.594Q9.519 4.501 7.005 4.5q-2.289 0-4.02 2.455-1.413 2.004-1.962 4.856-.556 2.892.108 4.963.39 1.216 1.177 1.915.913.81 2.197.811 2.274 0 4.146-2.325 1.008-1.253 2.694-4.502.345-.666.66-1.243m-1.166-2.008q-.585 1.01-1.268 2.33-1.595 3.072-2.477 4.169Q5.82 17.5 4.505 17.5q-1.041 0-1.47-1.337-.507-1.584-.048-3.974.466-2.43 1.632-4.081Q5.753 6.5 7.005 6.5q1.57 0 3.005 1.746.365.444.828 1.176" />
    </svg>
  );
};
export { MetaLine };
