import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const MergeCellsVertical = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-merge-cells-vertical', className);
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
      <path d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16zm-2-9V5h-5.999v2H15l-3 3-3-3h2V5H5v6h2v2H5v6h6v-2H9l3-3 3 3h-1.999v2H19v-6h-2v-2h2zm-8 2H9v-2h2v2zm4 0h-2v-2h2v2z" />
    </svg>
  );
};

export { MergeCellsVertical };
