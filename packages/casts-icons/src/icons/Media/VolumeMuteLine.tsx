import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const VolumeMuteLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-volume-mute-line', className);
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
      <path d="M10 7.22 6.603 10H3v4h3.603L10 16.78V7.22zM5.889 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .817.387v15.89a.5.5 0 0 1-.817.387L5.89 16zm14.525-4 3.536 3.536-1.414 1.414L19 13.414l-3.536 3.536-1.414-1.414L17.586 12 14.05 8.464l1.414-1.414L19 10.586l3.536-3.536 1.414 1.414L20.414 12z" />
    </svg>
  );
};

export { VolumeMuteLine };
