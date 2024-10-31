import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ColorFilterAiLine = (initProps: IconProps) => {
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
    `${prefixCls}-color-filter-ai-line`,
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
      <path d="M6.007 7.297A6 6 0 0 1 15.6 2.2l-1.2 1.6a4.018 4.018 0 0 0-3.206-.718 4.001 4.001 0 0 0 .287 7.885 5.996 5.996 0 0 1 7.849-1.663A6 6 0 1 1 12 18.655a6 6 0 1 1-5.764-9.983 6 6 0 0 1-.226-1.33zm1.143 3.236a4 4 0 1 0 4.215 2.434 6 6 0 0 1-1.252-.27 6 6 0 0 1-2.963-2.164m6.004 6.401a4 4 0 1 0 0-4.868q.168.376.28.762a6 6 0 0 1 .15.65 6 6 0 0 1-.43 3.456M18.577 7c.289.334.529.714.71 1.128l.246.566c.18.414.753.414.934 0l.246-.566a4.36 4.36 0 0 1 2.22-2.25l.759-.339a.53.53 0 0 0 0-.963l-.717-.319a4.37 4.37 0 0 1-2.251-2.326l-.253-.611a.506.506 0 0 0-.942 0l-.253.61q-.12.29-.276.555a4.34 4.34 0 0 1-1.975 1.772l-.717.32a.53.53 0 0 0 0 .962l.76.338A4.3 4.3 0 0 1 18.578 7" />
    </svg>
  );
};
export { ColorFilterAiLine };
