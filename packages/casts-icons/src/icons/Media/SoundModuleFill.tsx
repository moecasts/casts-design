import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const SoundModuleFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-sound-module-fill', className);
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
      <path d="M21 18v3h-2v-3h-2v-3h6v3h-2zM5 18v3H3v-3H1v-3h6v3H5zm6-12V3h2v3h2v3H9V6h2zm0 5h2v10h-2V11zm-8 2V3h2v10H3zm16 0V3h2v10h-2z" />
    </svg>
  );
};

export { SoundModuleFill };
