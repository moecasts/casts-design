import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const IeFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-ie-fill', className);
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
      <path d="M8.612 20.12c-2.744 1.49-5.113 1.799-6.422.49-1.344-1.34-.628-4.851 1.313-8.373A23.204 23.204 0 0 1 7.127 7.32c.187-.187 1.125-1.124 1.187-1.124 0 0-.5.313-.562.313-1.95 1.095-3.663 3.08-4.037 3.525a9.004 9.004 0 0 1 9.468-7.009c3.095-1.402 5.974-1.726 7.192-.51 1.125 1.123 1.062 2.995.125 5.242-.01.021-.018.043-.027.064A8.96 8.96 0 0 1 21.5 12c0 .38-.023.753-.069 1.12h-.804a4.104 4.104 0 0 1-.142.003H8.689v.187c.062 1.997 1.812 3.744 3.937 3.744 1.5 0 2.937-.811 3.562-1.997h4.78A9.003 9.003 0 0 1 8.612 20.12zm-.607-.321a9.03 9.03 0 0 1-3.972-4.742c-1.161 2.282-1.46 4.19-.469 5.18.813.812 2.438.624 4.438-.436l.003-.002zM20.172 7.292a8.19 8.19 0 0 1 .015-.034c.75-1.622.813-2.994.125-3.806-.869-.868-2.54-.75-4.522.168a9.032 9.032 0 0 1 4.382 3.672zm-3.609 3.46v-.061c-.125-2.06-1.75-3.62-3.75-3.62-2.125 0-3.936 1.685-4.061 3.62v.062h7.811z" />
    </svg>
  );
};

export { IeFill };
