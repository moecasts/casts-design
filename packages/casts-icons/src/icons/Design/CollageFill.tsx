import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const CollageFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-collage-fill', className);
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
      <path d="M11.189 13.157 12.57 21H4a1 1 0 0 1-1-1v-5.398l8.189-1.445zM20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-5.398L11.428 3H20zM9.397 3l1.444 8.188L3 12.57V4a1 1 0 0 1 1-1h5.397z" />
    </svg>
  );
};

export { CollageFill };
