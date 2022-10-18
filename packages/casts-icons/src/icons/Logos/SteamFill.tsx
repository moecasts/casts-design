import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const SteamFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-steam-fill', className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      role="img"
      className={classes}
      style={styles}
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12.004 2c-5.25 0-9.556 4.05-9.964 9.197l5.36 2.216a2.815 2.815 0 0 1 1.593-.492c.053 0 .104.003.157.005l2.384-3.452v-.049c0-2.08 1.69-3.77 3.77-3.77 2.079 0 3.77 1.692 3.77 3.772s-1.692 3.771-3.77 3.771h-.087l-3.397 2.426c0 .043.003.088.003.133a2.826 2.826 0 0 1-2.825 2.83 2.843 2.843 0 0 1-2.775-2.273l-3.838-1.589C3.573 18.922 7.427 22 12.005 22c5.522 0 9.998-4.477 9.998-10 0-5.522-4.477-10-9.999-10zM7.078 16.667c.218.452.595.832 1.094 1.041a2.126 2.126 0 0 0 1.634-3.922 2.119 2.119 0 0 0-1.565-.025l1.269.525a1.563 1.563 0 0 1 .84 2.046 1.563 1.563 0 0 1-2.044.843l-1.228-.508zm10.74-7.245a2.516 2.516 0 0 0-2.513-2.512 2.514 2.514 0 0 0 0 5.025 2.513 2.513 0 0 0 2.512-2.513zM15.31 7.53a1.889 1.889 0 1 1-.002 3.774 1.889 1.889 0 0 1 .002-3.774z" />
    </svg>
  );
};

export { SteamFill };
