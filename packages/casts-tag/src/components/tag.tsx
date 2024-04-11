import { forwardRef, useImperativeHandle, useRef } from 'react';
import {
  getKeyboardEvents,
  KEYCODE_CONFIRM,
  useDefaultProps,
} from '@casts/common';
import { CloseLine } from '@casts/icons';

import { defaultTagProps } from './default-props';
import { useTag } from './hooks';
import { TagProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/tag.scss';

export const Tag = forwardRef((props: TagProps, ref) => {
  const propsWithDefault = useDefaultProps(props, defaultTagProps);

  const { children, checkable, closeable, prefix, suffix } = propsWithDefault;

  const {
    classes,
    styles,

    prefixClasses,
    contentClasses,
    suffixClasses,

    handleClick,
    handleKeyDown,
    closeClasses,
    visible,
    handleClose,
  } = useTag(propsWithDefault);

  const tagRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => tagRef.current);

  if (!visible) {
    return null;
  }

  return (
    <div
      role="button"
      tabIndex={checkable ? 0 : -1}
      className={classes}
      style={styles}
      ref={tagRef}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {prefix && <span className={prefixClasses}>{prefix}</span>}
      <span className={contentClasses}>{children}</span>
      {suffix && <span className={suffixClasses}>{suffix}</span>}
      {closeable && (
        <CloseLine
          className={closeClasses}
          onClick={handleClose}
          onKeyDown={getKeyboardEvents([[KEYCODE_CONFIRM, handleClose]])}
          role="button"
          tabIndex={0}
        />
      )}
    </div>
  );
});

Tag.displayName = 'Tag';
