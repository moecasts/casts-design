import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const RainbowLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-rainbow-line', className);
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
      <path d="M12 4c6.075 0 11 4.925 11 11v5h-2v-5a9 9 0 0 0-8.735-8.996L12 6a9 9 0 0 0-8.996 8.735L3 15v5H1v-5C1 8.925 5.925 4 12 4zm0 4a7 7 0 0 1 7 7v5h-2v-5a5 5 0 0 0-4.783-4.995L12 10a5 5 0 0 0-4.995 4.783L7 15v5H5v-5a7 7 0 0 1 7-7zm0 4a3 3 0 0 1 3 3v5h-2v-5a1 1 0 0 0-.883-.993L12 14a1 1 0 0 0-.993.883L11 15v5H9v-5a3 3 0 0 1 3-3z" />
    </svg>
  );
};

export { RainbowLine };
