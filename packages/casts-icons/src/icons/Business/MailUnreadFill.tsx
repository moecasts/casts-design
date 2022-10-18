import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const MailUnreadFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-mail-unread-fill', className);
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
      <path d="M18.803 8.493A5.023 5.023 0 0 0 22 8.9V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h13.1c-.066.323-.1.658-.1 1a4.98 4.98 0 0 0 1.193 3.241l-5.132 4.442-6.414-5.445-1.294 1.524 7.72 6.555 6.73-5.824zM21 7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
    </svg>
  );
};

export { MailUnreadFill };
