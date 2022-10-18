import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const EmotionSadFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-emotion-sad-fill', className);
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
      <path d="M12 2c5.523 0 10 4.477 10 10a9.958 9.958 0 0 1-1.065 4.496 1.977 1.977 0 0 0-.398-.775l-.123-.135L19 14.172l-1.414 1.414-.117.127a2 2 0 0 0 1.679 3.282A9.974 9.974 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2zm0 13c-1.38 0-2.63.56-3.534 1.463l-.166.174.945.86C10.035 17.182 10.982 17 12 17c.905 0 1.754.144 2.486.396l.269.1.945-.86A4.987 4.987 0 0 0 12 15zm-3.5-5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
    </svg>
  );
};

export { EmotionSadFill };
