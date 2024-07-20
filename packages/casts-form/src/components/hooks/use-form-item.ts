import { CSSProperties } from 'react';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';

import { UseFormItemProsp } from '../types';

export const useFormItem = (props: UseFormItemProsp) => {
  const { getPrefixCls } = useConfig();

  /* --------------------------------- Classes ---------------------------------------- */
  const prefixCls = getPrefixCls('form-item');
  const wrapClasses = clsx(prefixCls, props.className, {
    [`${prefixCls}--${props.status}`]: props.status,
  });

  const contentWrapClasses = `${prefixCls}-content-wrap`;

  const messageClasses = `${prefixCls}-message`;

  /* --------------------------------- Styles ---------------------------------------- */
  const wrapStyles: CSSProperties = { ...props.style };

  return {
    wrapClasses,
    wrapStyles,
    contentWrapClasses,
    messageClasses,
  };
};
