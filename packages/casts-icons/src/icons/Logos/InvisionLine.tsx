import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const InvisionLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-invision-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M4.001 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h14V5zm1.988 9.065.77-3.271H6.565l.362-1.39h2.868l-1.132 4.67a3 3 0 0 0-.106.72c0 .298.141.386.362.437.135.032 1.207.01 1.791-1.34l.744-3.097h-1.207l.362-1.39h2.58l-.332 1.578c.453-.88 1.359-1.715 2.25-1.715.95 0 1.735.704 1.735 2.055 0 .345-.046.721-.166 1.145l-.483 1.805a2.2 2.2 0 0 0-.076.487c0 .314.121.47.347.47.227 0 .514-.172.846-1.13l.664.267c-.393 1.429-1.102 2.025-1.993 2.025-1.041 0-1.539-.643-1.539-1.523 0-.25.03-.518.106-.785l.498-1.853c.06-.204.075-.392.075-.565 0-.596-.347-.958-.905-.958-.71 0-1.178.53-1.419 1.55l-.966 4.032h-1.69l.303-1.267c-.497.85-1.187 1.375-2.038 1.375-1.026 0-1.509-.615-1.509-1.542 0-.235.03-.523.09-.79m1.637-5.44a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25" />
    </svg>
  );
};
export { InvisionLine };
