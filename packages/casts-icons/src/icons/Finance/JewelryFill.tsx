import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const JewelryFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-jewelry-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M15 2.847v2.016a1 1 0 0 0 .578.906l.409.191c-.086 1.403-.559 2.636-1.244 3.526C13.985 10.472 13.007 11 12 11s-1.984-.528-2.742-1.514C8.572 8.596 8.1 7.363 8.014 5.96l.41-.19A1 1 0 0 0 9 4.862V2.847c0-.489.354-.905.84-.96a18.8 18.8 0 0 1 4.321 0c.486.055.84.471.84.96M6.097 6.855 2.85 8.37a1.5 1.5 0 0 0-.729 1.984L6.6 20.125A1.5 1.5 0 0 0 7.963 21h8.075a1.5 1.5 0 0 0 1.363-.875l4.479-9.77a1.5 1.5 0 0 0-.73-1.985l-3.247-1.515c-.212 1.467-.766 2.8-1.574 3.85-.913 1.188-2.18 2.043-3.648 2.248l1.508 2.111a.75.75 0 0 1 0 .872l-1.985 2.78a.25.25 0 0 1-.407 0l-1.985-2.78a.75.75 0 0 1 0-.872l1.508-2.111c-1.467-.205-2.735-1.06-3.648-2.247-.808-1.05-1.362-2.383-1.575-3.851" />
    </svg>
  );
};
export { JewelryFill };
