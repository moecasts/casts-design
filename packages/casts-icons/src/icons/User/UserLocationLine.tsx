import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const UserLocationLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-user-location-line', className);
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
      <path d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm8.828 10.071L18 24l-2.828-2.929c-1.563-1.618-1.563-4.24 0-5.858a3.904 3.904 0 0 1 5.656 0c1.563 1.618 1.563 4.24 0 5.858zm-1.438-1.39c.813-.842.813-2.236 0-3.078a1.904 1.904 0 0 0-2.78 0c-.813.842-.813 2.236 0 3.079L18 21.12l1.39-1.44z" />
    </svg>
  );
};

export { UserLocationLine };