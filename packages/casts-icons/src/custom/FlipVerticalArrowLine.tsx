import { CSSProperties, SVGProps } from 'react';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';

import '../styles.scss';
import './styles/flip-vertical-arrow-line.scss';

type IconProps = {
  size?: string;
  /**
   * whether flip the arrow
   */
  flip?: boolean;
} & SVGProps<SVGSVGElement>;

const FlipVerticalArrowLine = (props: IconProps) => {
  const { className, style, size, color, flip, fill, ...rest } = props;
  const styles = {
    fontSize: size,
    fill: 'none',
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(
    `${prefixCls}`,
    `${prefixCls}-flip-vertical-arrow-line`,
    className,
    {
      [`${prefixCls}-flip-vertical-arrow-line--flip`]: flip,
    },
  );

  const pathStyles: CSSProperties = {
    stroke: fill ? fill : color,
  };

  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      className={classes}
      style={styles}
      {...rest}
    >
      <path
        style={pathStyles}
        d="M3.75 5.7998L7.99274 10.0425L12.2361 5.79921"
      />
    </svg>
  );
};

export { FlipVerticalArrowLine };
