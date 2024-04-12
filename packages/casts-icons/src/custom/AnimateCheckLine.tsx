import { CSSProperties, SVGProps } from 'react';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';

import '../styles.scss';
import './styles/animate-check-line.scss';

type IconProps = {
  size?: string;
  /**
   * whether checked the arrow
   * @default true
   */
  checked?: boolean;
} & SVGProps<SVGSVGElement>;

const AnimateCheckLine = (props: IconProps) => {
  const {
    className,
    style,
    size,
    color,
    checked = true,
    fill,
    ...rest
  } = props;
  const styles = {
    fontSize: size,
    fill: 'none',
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(
    `${prefixCls}`,
    `${prefixCls}-animate-check-line`,
    className,
    {
      [`${prefixCls}-animate-check-line--checked`]: checked,
    },
  );

  const pathStyles: CSSProperties = {
    stroke: fill ? fill : color,
  };

  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      className={classes}
      style={styles}
      {...rest}
    >
      <path style={pathStyles} d="M4.5 11 L10 16.5 L19.5 7" />
    </svg>
  );
};

export { AnimateCheckLine };
