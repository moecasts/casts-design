import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const TShirtAirFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('casts-icon', 'casts-icon-t-shirt-air-fill', className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12.707 17.793C13.534 18.62 14.295 19 15 19c.378 0 .68-.067 1.237-.276l.392-.152C17.679 18.15 18.209 18 19 18c1.214 0 2.379.545 3.486 1.58l.221.213-1.414 1.414C20.466 20.38 19.705 20 19 20c-.378 0-.68.067-1.237.276l-.392.152c-1.05.421-1.58.572-2.371.572-1.214 0-2.379-.545-3.486-1.58l-.221-.213 1.414-1.414zM9 3a3 3 0 0 0 6 0h6a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-9a2 2 0 0 0-1.995 1.85L10 14v7H6a1 1 0 0 1-1-1l-.001-8.001L3 12a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6zm3.707 10.793C13.534 14.62 14.295 15 15 15c.378 0 .68-.067 1.237-.276l.392-.152C17.679 14.15 18.209 14 19 14c1.214 0 2.379.545 3.486 1.58l.221.213-1.414 1.414C20.466 16.38 19.705 16 19 16c-.378 0-.68.067-1.237.276l-.392.152c-1.05.421-1.58.572-2.371.572-1.214 0-2.379-.545-3.486-1.58l-.221-.213 1.414-1.414z" />
    </svg>
  );
};

export { TShirtAirFill };
