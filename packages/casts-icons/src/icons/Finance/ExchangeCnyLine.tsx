import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ExchangeCnyLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(
    `${prefixCls}`,
    `${prefixCls}-exchange-cny-line`,
    className,
  );
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M19.379 15.106A8.001 8.001 0 0 0 8.035 5.056l-.993-1.737a10 10 0 0 1 9.962.023c4.49 2.593 6.21 8.143 4.118 12.77l1.342.775-4.166 2.214-.165-4.714zM4.629 8.9a8.001 8.001 0 0 0 11.345 10.05l.992 1.737a10 10 0 0 1-9.962-.024c-4.49-2.593-6.21-8.142-4.117-12.77L1.545 7.12 5.71 4.905l.165 4.714zm8.375 4.638h3v2h-3v2h-2v-2h-3v-2h3v-1h-3v-2h2.586L8.469 8.417l1.414-1.414 2.121 2.121 2.122-2.121 1.414 1.414-2.122 2.121h2.586v2h-3z" />
    </svg>
  );
};
export { ExchangeCnyLine };
