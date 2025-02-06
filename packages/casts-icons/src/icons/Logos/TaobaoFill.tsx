import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const TaobaoFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-taobao-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m3.576 8.277-1.193 1.842 2.201 1.37s1.464.755.762 2.17c-.649 1.338-3.846 4.27-3.846 4.27l2.862 1.797c1.984-4.325 1.85-3.749 2.347-5.305.512-1.58.625-2.794-.242-3.677-1.113-1.125-1.238-1.23-2.89-2.467m1.565-.694c1.04 0 1.882-.758 1.882-1.693 0-.943-.842-1.701-1.882-1.701-1.049 0-1.887.762-1.887 1.701.004.931.838 1.693 1.887 1.693m17.005.21s-.625-4.87-11.208-1.855c.455-.794.67-1.306.67-1.306l-2.642-.75s-1.068 3.508-2.97 5.14c0 0 1.846 1.073 1.826 1.04a17 17 0 0 0 1.407-1.596q.633-.284 1.225-.524c-.492.887-1.278 2.217-2.068 3.056l1.113.984s.762-.738 1.588-1.62h.944v1.636H8.346v1.306h3.685v3.133l-.142-.004c-.407-.02-1.036-.09-1.286-.484-.298-.484-.076-1.359-.064-1.903H7.995l-.093.052s-.935 4.205 2.69 4.113c3.386.092 5.329-.956 6.264-1.678l.371 1.395 2.089-.883-1.415-3.483-1.694.536.315 1.19c-.428.33-.932.572-1.468.754v-2.738h3.592v-1.31h-3.592v-1.637h3.604V9.051h-6.41c.464-.569.823-1.089.92-1.415l-1.121-.307c4.797-1.733 7.47-1.435 7.45 1.403v7.475s.282 2.564-2.637 2.383l-1.58-.343-.367 1.512s6.817 1.967 7.374-3.314c.552-5.282-.141-8.652-.141-8.652" />
    </svg>
  );
};
export { TaobaoFill };
