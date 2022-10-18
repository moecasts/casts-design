import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const VoiceRecognitionLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx(
    'cds-icon',
    'cds-icon-voice-recognition-line',
    className,
  );
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
      <path d="M5 15v4h4v2H3v-6h2zm16 0v6h-6v-2h4v-4h2zm-8-9v12h-2V6h2zM9 9v6H7V9h2zm8 0v6h-2V9h2zM9 3v2H5v4H3V3h6zm12 0v6h-2V5h-4V3h6z" />
    </svg>
  );
};

export { VoiceRecognitionLine };
