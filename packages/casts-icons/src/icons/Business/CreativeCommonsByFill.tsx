import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const CreativeCommonsByFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx(
    'cds-icon',
    'cds-icon-creative-commons-by-fill',
    className,
  );
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm2 8h-4a1 1 0 0 0-.993.883L9 11v4h1.5v4h3v-4H15v-4a1 1 0 0 0-.883-.993L14 10zm-2-5a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
    </svg>
  );
};

export { CreativeCommonsByFill };
