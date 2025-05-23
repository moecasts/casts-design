import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const SkypeLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-skype-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M13.005 18.423a2 2 0 0 1 1.237.207 3.25 3.25 0 0 0 4.389-4.389 2 2 0 0 1-.207-1.237q.077-.495.077-1.004a6.5 6.5 0 0 0-7.504-6.423A2 2 0 0 1 9.76 5.37 3.25 3.25 0 0 0 5.371 9.76a2 2 0 0 1 .207 1.237Q5.5 11.49 5.5 12a6.5 6.5 0 0 0 7.504 6.423M12.001 20.5a8.5 8.5 0 0 1-8.4-9.81 5.25 5.25 0 0 1 7.09-7.09q.642-.1 1.31-.1a8.5 8.5 0 0 1 8.4 9.81 5.25 5.25 0 0 1-7.09 7.09q-.642.1-1.31.1m.053-3.5C9.252 17 8 15.62 8 14.586c0-.532.39-.902.928-.902 1.2 0 .887 1.725 3.125 1.725 1.143 0 1.776-.624 1.776-1.261 0-.384-.188-.808-.943-.995l-2.49-.624c-2.006-.504-2.37-1.592-2.37-2.612C8.027 7.797 10.019 7 11.89 7c1.72 0 3.755.956 3.755 2.228 0 .545-.479.863-1.011.863-1.023 0-.835-1.418-2.9-1.418-1.023 0-1.596.462-1.596 1.126s.803.876 1.502 1.035l1.836.409c2.014.452 2.524 1.633 2.524 2.746 0 1.724-1.325 3.011-3.985 3.011z" />
    </svg>
  );
};
export { SkypeLine };
