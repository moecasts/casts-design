import { forwardRef, useImperativeHandle } from 'react';
import { useClickAway } from '@casts/common';

import { useSelectList } from './hooks/use-select-list';
import { SelectOption } from './select-option';
import { SelectListProps } from './types/select-list';

export const SelectList = forwardRef((props: SelectListProps, ref) => {
  const { onOutsideClick } = props;

  const {
    classes,
    styles,
    listRef,
    virtualizer,
    shouldEnableVirtual,
    options,

    virtualScrollContainerClasses,
    virtualScrollListClasses,
  } = useSelectList(props);

  useImperativeHandle(ref, () => listRef.current as HTMLUListElement);

  useClickAway(
    (e: Event) => {
      onOutsideClick?.(e);
    },
    () => listRef.current,
  );

  const getRenderOptions = () => {
    if (shouldEnableVirtual) {
      const renderOptions = virtualizer.getVirtualItems().map((virtualRow) => {
        const option = props.options![virtualRow.index];
        return (
          <div
            key={virtualRow.key}
            data-index={virtualRow.index}
            ref={virtualizer.measureElement}
          >
            <SelectOption key={option.value} value={option.value}>
              {option.label}
            </SelectOption>
          </div>
        );
      });

      return (
        <div
          className={virtualScrollContainerClasses}
          style={{
            height: virtualizer.getTotalSize(),
          }}
        >
          <div
            className={virtualScrollListClasses}
            style={{
              transform: `translateY(${
                virtualizer.getVirtualItems()[0]?.start ?? 0
              }px)`,
            }}
          >
            {renderOptions}
          </div>
        </div>
      );
    }

    return options?.map((option) => {
      return (
        <SelectOption key={option.value} value={option.value}>
          {option.label}
        </SelectOption>
      );
    });
  };

  return (
    <ul className={classes} style={styles} ref={listRef}>
      {getRenderOptions()}
    </ul>
  );
});

SelectList.displayName = 'SelectList';
