import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const StackOverflowLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-stack-overflow-line', className);
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
      <path d="M18 20.002V15h2v7.002H4V15h2v5.002h12zM7.5 18v-2h9v2h-9zm.077-4.38.347-1.97 8.864 1.563-.348 1.97-8.863-1.563zm1.634-5.504 1-1.732 7.794 4.5-1 1.732-7.794-4.5zm3.417-4.613 1.532-1.286 5.785 6.895-1.532 1.285-5.785-6.894z" />
    </svg>
  );
};

export { StackOverflowLine };
