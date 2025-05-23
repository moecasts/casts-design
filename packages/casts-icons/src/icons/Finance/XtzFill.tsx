import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const XtzFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-xtz-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M19.631 17.494c-.221-3.858-5.15-5.61-5.62-5.791-.021-.01-.021-.027-.011-.047l5.082-5.022v-.54a.167.167 0 0 0-.163-.162H9.553V2l-3.457.711v.512h.192s.848 0 .848.834v1.866H4.46c-.048 0-.097.047-.097.094v1.186h2.782v6.433c0 2.019 1.32 3.422 3.629 3.232.473-.046.929-.208 1.329-.473a.604.604 0 0 0 .28-.503v-.636c-.751.493-1.388.464-1.388.464-1.463 0-1.433-1.83-1.433-1.83V7.202H16.3l-4.851 4.814-.02 1.137q0 .03.029.029c4.447.739 5.65 3.572 5.65 4.397 0 0 .481 4.008-3.59 4.284 0 0-2.668.112-3.139-.939-.019-.04 0-.076.038-.094.444-.2.741-.588.741-1.11 0-.777-.48-1.412-1.492-1.412-.817 0-1.492.636-1.492 1.413 0 0-.384 3.373 5.335 3.278 6.526-.114 6.121-5.504 6.121-5.504" />
    </svg>
  );
};
export { XtzFill };
