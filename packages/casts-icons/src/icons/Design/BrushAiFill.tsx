import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const BrushAiFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-brush-ai-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m4.713 7.128-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319A4.37 4.37 0 0 0 3.276.931L3.53.32a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251m13.515-4.757-4.94 3.842c-3.946-.974-7.73 1.333-8.788 5.284-.102.38-.134.765-.167 1.169-.115 1.394-.247 3.005-3.333 5.33 2.5 1.5 7 3.002 10.502 3.002a7.505 7.505 0 0 0 7.283-9.291l3.84-4.938a1 1 0 0 0-.082-1.321l-2.994-2.994a1 1 0 0 0-1.321-.083m-1.333 5.914a8 8 0 0 0-.194-.194l-1.124-1.124 3.182-2.475 1.746 1.746L18.03 9.42z" />
    </svg>
  );
};
export { BrushAiFill };
