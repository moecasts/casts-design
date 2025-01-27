import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const WordpressFill = (initProps: IconProps) => {
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
    `${prefixCls}-wordpress-fill`,
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
      <path d="M3.323 12c0 3.438 2 6.4 4.892 7.808L4.077 8.469A8.65 8.65 0 0 0 3.323 12M12 20.677a8.8 8.8 0 0 0 2.885-.492l-.062-.116-2.67-7.307-2.6 7.561c.77.23 1.593.354 2.447.354M13.192 7.93l3.139 9.33.869-2.892c.37-1.2.654-2.061.654-2.807 0-1.077-.385-1.816-.708-2.385-.446-.723-.854-1.33-.854-2.039 0-.8.6-1.538 1.462-1.538h.107A8.65 8.65 0 0 0 12 3.323a8.67 8.67 0 0 0-7.246 3.908l.554.015c.907 0 2.307-.115 2.307-.115.477-.023.531.661.062.715 0 0-.47.062-1 .085l3.17 9.4 1.9-5.692-1.355-3.708a16 16 0 0 1-.907-.077c-.47-.03-.416-.746.053-.723 0 0 1.431.115 2.285.115.908 0 2.308-.115 2.308-.115.469-.023.53.661.061.715 0 0-.469.054-1 .085m3.17 11.569a8.676 8.676 0 0 0 3.253-11.662 8.2 8.2 0 0 1-.6 4zM12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20" />
    </svg>
  );
};
export { WordpressFill };
