import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const TrafficLightLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-traffic-light-line', className);
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
      <path d="M7 4V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1h3c0 2.5-2.5 3.5-3 3.5V10h3c0 2.5-2.5 3.5-3 3.5V16h3c0 2.5-2.5 3.5-3 3.5V21a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1.5c-.5 0-3-1-3-3.5h3v-2.5c-.5 0-3-1-3-3.5h3V7.5c-.5 0-3-1-3-3.5h3zm5 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </svg>
  );
};

export { TrafficLightLine };
