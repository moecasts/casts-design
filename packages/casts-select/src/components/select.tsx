import {
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  formatSizeUnit,
  isUndefined,
  raf,
  useDefaultProps,
} from '@casts/common';
import { FlipVerticalArrowLine } from '@casts/icons';
import { Input } from '@casts/input';
import { Popup, PopupRef } from '@casts/popup';

import { defaultSelectProps } from './default-props';
import { useSelect } from './hooks';
import { SelectProvider, useSelectContext } from './select-context';
import { SelectList } from './select-list';
import { SelectProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/select.scss';

const _Select = forwardRef((props: SelectProps, ref: Ref<HTMLDivElement>) => {
  const propsWithDefault = useDefaultProps(props, defaultSelectProps);

  const { size, showFlipArrow, inputProps } = propsWithDefault;

  const {
    classes,
    styles,

    arrowClasses,

    popupClasses,
    placeholder,
    options,

    virtual,

    handleOutsideClick,
    width,
  } = useSelect(propsWithDefault);

  const { open, handleOpenChange, valueDisplay } = useSelectContext();

  const popupRef = useRef<PopupRef>(null);

  const wrapRef = useRef<HTMLDivElement>(null);

  const inputRef = useRef(null);

  const [popupContentWidth, setPopupContentWidth] = useState<string>('');

  useEffect(() => {
    const calculateWrapWidth = () => {
      if (!wrapRef.current || !popupRef.current) {
        return '';
      }
      const wrap = wrapRef.current;

      const wrapWidth = wrap.offsetWidth;
      return wrapWidth;
    };

    const popupContentWidth = isUndefined(width) ? calculateWrapWidth() : width;
    setPopupContentWidth(formatSizeUnit(popupContentWidth));
  }, [width]);

  useImperativeHandle(ref, () => wrapRef.current as HTMLDivElement);

  return (
    <Popup
      visible={open}
      onVisibleChange={handleOpenChange}
      className={popupClasses}
      ref={popupRef}
      style={{ width: popupContentWidth, padding: 0 }}
      content={
        <SelectList
          virtual={virtual}
          options={options}
          onOutsideClick={handleOutsideClick}
        />
      }
      trigger="manual"
      placement="bottom-start"
      showArrow={false}
      nestable
    >
      <div className={classes} style={styles} ref={wrapRef}>
        <Input
          readOnly
          placeholder={placeholder}
          value={valueDisplay}
          size={size}
          suffix={
            showFlipArrow ? (
              <FlipVerticalArrowLine flip={open} className={arrowClasses} />
            ) : undefined
          }
          onClick={() => {
            // in order to fix when click input, the `SelectList` useClickAway will fire if is sync
            raf(() => {
              handleOpenChange?.(!open);
            });
          }}
          ref={inputRef}
          {...inputProps}
        />
      </div>
    </Popup>
  );
});

_Select.displayName = 'Select';

export const Select = forwardRef(
  (props: SelectProps, ref: Ref<HTMLDivElement>) => {
    const selectRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => selectRef.current as HTMLDivElement);

    return (
      <SelectProvider {...props}>
        <_Select {...props} ref={selectRef} />
      </SelectProvider>
    );
  },
);

Select.displayName = 'Select';
