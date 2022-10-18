import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const Wechat2Fill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-wechat2-fill', className);
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
      <path d="M5.457 18.185C3.358 16.677 2 14.4 2 11.908 2 7.323 6.475 3.6 12 3.6s10 3.723 10 8.308c0 4.584-4.475 8.307-10 8.307a11.36 11.36 0 0 1-3.272-.461c-.092-.03-.216-.03-.308-.03-.185 0-.37.06-.525.153l-2.191 1.261a.44.44 0 0 1-.185.062.342.342 0 0 1-.34-.338c0-.093.03-.154.062-.247.03-.03.308-1.046.463-1.661 0-.062.03-.154.03-.216 0-.246-.092-.43-.277-.553zm3.21-7.674c.717 0 1.285-.568 1.285-1.285 0-.718-.568-1.286-1.285-1.286-.718 0-1.285.568-1.285 1.286 0 .717.567 1.285 1.285 1.285zm6.666 0c.718 0 1.285-.568 1.285-1.285 0-.718-.567-1.286-1.285-1.286-.717 0-1.285.568-1.285 1.286 0 .717.568 1.285 1.285 1.285z" />
    </svg>
  );
};

export { Wechat2Fill };
