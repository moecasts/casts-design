import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Hand = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-hand`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M12.5 2a.5.5 0 0 0-.5.5V12h-2V4.5a.5.5 0 0 0-1 0V14H7c-.38-1.62-1.358-2.56-2.405-2.678.284.744.766 1.937 1.571 3.778.86 1.962 1.725 3.422 2.838 4.399C10.078 20.442 11.459 21 13.5 21a5.5 5.5 0 0 0 5.5-5.5V7a.5.5 0 0 0-1 0v5h-2V4a.5.5 0 0 0-1 0v8h-2V2.5a.5.5 0 0 0-.5-.5M21 15.5a7.5 7.5 0 0 1-7.5 7.5c-2.458 0-4.328-.692-5.816-1.998-1.45-1.274-2.459-3.064-3.35-5.1-.93-2.127-1.444-3.422-1.724-4.178-.357-.964.136-2.312 1.476-2.406a4.02 4.02 0 0 1 2.914.94V4.5a2.5 2.5 0 0 1 3.04-2.442 2.5 2.5 0 0 1 4.79-.467A2.502 2.502 0 0 1 18 4v.55q.243-.05.5-.05A2.5 2.5 0 0 1 21 7z" />
    </svg>
  );
};
export { Hand };
