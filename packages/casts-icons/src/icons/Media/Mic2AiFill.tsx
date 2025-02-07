import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Mic2AiFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-mic2-ai-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m20.467 7.694.246-.566a4.36 4.36 0 0 1 2.22-2.25l.759-.339a.53.53 0 0 0 0-.963l-.717-.319A4.37 4.37 0 0 1 20.724.931L20.47.32a.506.506 0 0 0-.942 0l-.253.61a4.37 4.37 0 0 1-2.25 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.36 4.36 0 0 1 2.219 2.251l.246.566c.18.414.753.414.934 0m-6.08-2.355q.411.65 1.124.961l.565.247q.57.249.924.698V12a5 5 0 0 1-10 0V6a5 5 0 0 1 7.996-4.003q-.36.27-.61.664A2.46 2.46 0 0 0 14 4q0 .726.387 1.339M2.192 13.96l1.962-.392a8.003 8.003 0 0 0 15.692 0l1.962.392C20.896 18.545 16.852 22 12 22s-8.896-3.455-9.808-8.039" />
    </svg>
  );
};
export { Mic2AiFill };
