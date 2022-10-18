import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const Haze2Fill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-haze2-fill', className);
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
      <path d="M12 19a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-15 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM17 7a5 5 0 0 1 0 10c-1.844 0-3.51-1.04-5-3.122C10.51 15.96 8.844 17 7 17A5 5 0 0 1 7 7c1.844 0 3.51 1.04 5 3.122C13.49 8.04 15.156 7 17 7zm-5-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM4.5 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm15 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
    </svg>
  );
};

export { Haze2Fill };
