import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const KeyboardBoxFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-keyboard-box-fill', className);
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
      <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 4v2h2V7H5zm0 4v2h2v-2H5zm0 4v2h14v-2H5zm4-4v2h2v-2H9zm0-4v2h2V7H9zm4 0v2h2V7h-2zm4 0v2h2V7h-2zm-4 4v2h2v-2h-2zm4 0v2h2v-2h-2z" />
    </svg>
  );
};

export { KeyboardBoxFill };
