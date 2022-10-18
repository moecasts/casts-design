import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const ScalesFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-scales-fill', className);
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
      <path d="M13 2v1h7v2h-7v14h4v2H7v-2h4V5H4V3h7V2h2zM5 6.343l2.828 2.829A3.999 3.999 0 0 1 5 16a3.999 3.999 0 0 1-2.828-6.828L5 6.343zm14 0 2.828 2.829A3.999 3.999 0 0 1 19 16a3.999 3.999 0 0 1-2.828-6.828L19 6.343zm0 2.829-1.414 1.414A1.986 1.986 0 0 0 17 12l4 .001c0-.54-.212-1.041-.586-1.415L19 9.172zm-14 0-1.414 1.414A1.986 1.986 0 0 0 3 12l4 .001c0-.54-.212-1.041-.586-1.415L5 9.172z" />
    </svg>
  );
};

export { ScalesFill };
