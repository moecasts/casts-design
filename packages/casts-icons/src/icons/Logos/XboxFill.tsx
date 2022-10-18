import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const XboxFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-xbox-fill', className);
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
      <path d="M5.418 19.527A9.956 9.956 0 0 0 12 22a9.967 9.967 0 0 0 6.585-2.473c1.564-1.593-3.597-7.257-6.585-9.514-2.985 2.257-8.15 7.921-6.582 9.514zm9.3-12.005c2.084 2.468 6.237 8.595 5.064 10.76A9.952 9.952 0 0 0 22 12.003a9.958 9.958 0 0 0-2.975-7.113s-.022-.018-.068-.035a.686.686 0 0 0-.235-.038c-.493 0-1.654.362-4.004 2.705zM5.045 4.856c-.048.017-.068.034-.072.035A9.963 9.963 0 0 0 2 12.003c0 2.379.832 4.561 2.218 6.278C3.05 16.11 7.2 9.988 9.284 7.523 6.934 5.178 5.771 4.818 5.28 4.818a.604.604 0 0 0-.234.039v-.002zM12 4.959S9.546 3.523 7.63 3.455c-.753-.027-1.212.246-1.268.282C8.149 2.538 10.049 2 11.987 2H12c1.945 0 3.838.538 5.638 1.737-.056-.038-.512-.31-1.266-.282-1.917.068-4.372 1.5-4.372 1.5v.004z" />
    </svg>
  );
};

export { XboxFill };
