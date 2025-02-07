import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const VisaLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-visa-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m22.222 15.768-.225-1.125h-2.514l-.4 1.117-2.015.004q1.943-4.669 2.884-6.917c.164-.392.455-.592.884-.589q.492.004 1.606.001L24 15.765zm-2.174-2.666h1.621l-.605-2.82zM7.062 8.257l2.026.002-3.132 7.51-2.051-.002a951 951 0 0 1-1.528-5.956c-.1-.396-.298-.673-.679-.804Q1.187 8.832 0 8.466v-.207h3.237c.56 0 .887.271.992.827q.159.836.8 4.254zm4.81.002-1.601 7.509-1.929-.003L9.94 8.257zm3.91-.139c.577 0 1.304.18 1.722.346l-.338 1.556c-.378-.152-1-.357-1.523-.35-.76.013-1.23.332-1.23.638 0 .498.816.749 1.656 1.293.958.62 1.085 1.177 1.073 1.783-.013 1.255-1.073 2.494-3.309 2.494-1.02-.015-1.388-.1-2.22-.396l.352-1.624c.847.354 1.206.467 1.93.467.663 0 1.232-.268 1.237-.735.004-.332-.2-.497-.944-.907s-1.788-.979-1.774-2.122c.017-1.462 1.402-2.443 3.368-2.443" />
    </svg>
  );
};
export { VisaLine };
