import {
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { formatSizeUnit, useDefaultProps } from '@casts/common';
import { FlipVerticalArrowLine } from '@casts/icons';
import { Input } from '@casts/input';
import { Popup, PopupRef } from '@casts/popup';

import { defaultSelectProps } from './default-props';
import { useSelect } from './hooks';
import { SelectProvider, useSelectContext } from './select-context';
import { SelectList } from './select-list';
import { SelectProps } from './types';

import './styles/select.scss';

const _Select = forwardRef((props: SelectProps, ref: Ref<HTMLDivElement>) => {
  const propsWithDefault = useDefaultProps(props, defaultSelectProps);

  const {
    classes,
    styles,

    arrowClasses,

    popupClasses,
    placeholder,
    options,

    virtual,

    handleOutsideClick,
  } = useSelect(propsWithDefault);

  const { open, handleOpenChange } = useSelectContext();

  const popupRef = useRef<PopupRef>(null);

  const wrapRef = useRef<HTMLDivElement>(null);

  const inputRef = useRef(null);

  const [popupContentWidth, setPopupContentWidth] = useState<string>('auto');

  useEffect(() => {
    if (!wrapRef.current || !popupRef.current) {
      return;
    }

    const wrap = wrapRef.current;

    const wrapWidth = wrap.offsetWidth;

    setPopupContentWidth(formatSizeUnit(wrapWidth));
  }, []);

  useImperativeHandle(ref, () => wrapRef.current as HTMLDivElement);

  const { valueDisplay } = useSelectContext();

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
    >
      <div className={classes} style={styles} ref={wrapRef}>
        <Input
          readOnly
          placeholder={placeholder}
          value={valueDisplay}
          suffix={
            <FlipVerticalArrowLine flip={open} className={arrowClasses} />
          }
          onClick={() => {
            handleOpenChange?.(true);
          }}
          ref={inputRef}
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
