import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const CpuLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-cpu-line', className);
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
      <path d="M6 18h12V6H6v12zm8 2h-4v2H8v-2H5a1 1 0 0 1-1-1v-3H2v-2h2v-4H2V8h2V5a1 1 0 0 1 1-1h3V2h2v2h4V2h2v2h3a1 1 0 0 1 1 1v3h2v2h-2v4h2v2h-2v3a1 1 0 0 1-1 1h-3v2h-2v-2zM8 8h8v8H8V8z" />
    </svg>
  );
};

export { CpuLine };
