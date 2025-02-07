import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const VoiceRecognitionLine = (initProps: IconProps) => {
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
    `${prefixCls}-voice-recognition-line`,
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
      <path d="M4.998 15v4h4v2h-6v-6zm16 0v6h-6v-2h4v-4zm-8-9v12h-2V6zm-4 3v6h-2V9zm8 0v6h-2V9zm-8-6v2h-4v4h-2V3zm12 0v6h-2V5h-4V3z" />
    </svg>
  );
};
export { VoiceRecognitionLine };
