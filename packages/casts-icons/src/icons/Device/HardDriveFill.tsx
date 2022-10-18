import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const HardDriveFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-hard-drive-fill', className);
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
      <path d="M13.95 2H20a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8.05c.329.033.663.05 1 .05 5.523 0 10-4.477 10-10 0-.337-.017-.671-.05-1zM15 16v2h2v-2h-2zM11.938 2A8 8 0 0 1 3 10.938V3a1 1 0 0 1 1-1h7.938z" />
    </svg>
  );
};

export { HardDriveFill };
