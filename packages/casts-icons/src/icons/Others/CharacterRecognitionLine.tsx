import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const CharacterRecognitionLine = (initProps: IconProps) => {
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
    `${prefixCls}-character-recognition-line`,
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
      <path d="M4.998 15v4h4v2h-6v-6zm16 0v6h-6v-2h4v-4zm-8.001-9 4.4 11h-2.155l-1.201-3h-4.09l-1.199 3H6.598l4.399-11zm-1 2.885L10.75 12h2.492zM8.998 3v2h-4v4h-2V3zm12 0v6h-2V5h-4V3z" />
    </svg>
  );
};
export { CharacterRecognitionLine };
