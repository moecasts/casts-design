import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const SnapchatLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-snapchat-line', className);
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
      <path d="m15.396 10.58.02-.249a32.392 32.392 0 0 0 .083-2.326c0-.87-.294-1.486-.914-2.063-.66-.614-1.459-.942-2.59-.942-1.137 0-1.958.335-2.51.888-.696.695-.958 1.218-.958 2.1 0 .521.061 1.994.096 2.618a2 2 0 0 1-.469 1.402c.055.098.105.204.153.317.3.771.198 1.543-.152 2.271-.392.818-.731 1.393-1.41 2.154a7.973 7.973 0 0 1-.642.643 1.999 1.999 0 0 1 .412.565 5.886 5.886 0 0 1 1.585.074c.81.146 1.324.434 2.194 1.061l.016.011.213.152c.619.44.877.546 1.473.546.609 0 .91-.121 1.523-.552l.207-.146c.876-.632 1.407-.928 2.231-1.076a6.664 6.664 0 0 1 1.559-.074 1.999 1.999 0 0 1 .417-.567 8.409 8.409 0 0 1-.616-.616 9.235 9.235 0 0 1-1.447-2.16c-.363-.749-.47-1.54-.137-2.321.04-.098.085-.19.132-.276a2 2 0 0 1-.469-1.435zm-10.315-.102c.419 0 .6.305 1.219.305.157 0 .26-.035.326-.066-.009-.156-.099-1.986-.099-2.729 0-1.688.72-2.69 1.543-3.514C8.893 3.65 10.175 3 11.996 3c1.82 0 3.066.653 3.952 1.478.886.825 1.551 1.93 1.551 3.528 0 1.555-.099 2.594-.108 2.716a.59.59 0 0 0 .279.065c.63 0 .63-.31 1.33-.31.685 0 .983.57.983.823 0 .621-.833.967-1.33 1.126-.369.117-.931.291-1.075.635-.074.174-.043.4.092.678.003.008 1.26 2.883 3.93 3.326.235.035.391.241.391.483 0 .332-.37.617-.726.782-.443.2-1.091.37-1.952.505-.043.078-.134.485-.235.887-.135.542-.801.366-.991.326A4.997 4.997 0 0 0 16.291 20c-.482.087-.913.378-1.395.726-.713.504-1.465 1.076-2.9 1.076-1.436 0-2.144-.572-2.857-1.076-.482-.348-.905-.637-1.396-.726-.898-.163-1.57.036-1.795.057-.226.02-.842.244-.996-.327-.045-.166-.191-.808-.235-.895-.856-.135-1.508-.313-1.952-.513-.365-.165-.726-.443-.726-.779 0-.235.158-.44.391-.482 2.644-.483 3.766-3.005 3.922-3.33.132-.276.161-.5.091-.679-.143-.343-.704-.513-1.073-.635-.105-.034-1.336-.373-1.336-1.117 0-.24.205-.573.582-.73a1.36 1.36 0 0 1 .465-.092z" />
    </svg>
  );
};

export { SnapchatLine };
