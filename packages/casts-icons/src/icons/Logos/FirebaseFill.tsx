import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FirebaseFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-firebase-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M6.757 1.501 4 18.5 9.473 4.816 7.695 1.353a.5.5 0 0 0-.938.148m4.807 2.817L4 18.5l9.84-11.55-1.399-2.623a.5.5 0 0 0-.877-.01m-.624 18.52L4 18.5 17.31 5.665a.5.5 0 0 1 .832.296L20 18.5l-6.94 4.337a2 2 0 0 1-2.12 0" />
    </svg>
  );
};
export { FirebaseFill };
