import { forwardRef, Ref, useImperativeHandle, useRef } from 'react';
import { getKeyboardEvents, KEYCODE_CONFIRM } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { InputNumber } from '@casts/input-number';
import { translate } from '@casts/locale';

import { usePaginationJumper } from './hooks';
import { PaginationJumperProps } from './types';

export const PaginationJumper = forwardRef(
  (props: PaginationJumperProps, ref: Ref<HTMLDivElement>) => {
    const { label } = props;

    const {
      classes,
      styles,

      gotoClasses,
      separatorClasses,
      pageCountClasses,
      pageClasses,

      current,
      pageCount,
      isCurrentInvalid,

      handleChange,
      handleCurrentConfirmChange,
    } = usePaginationJumper(props);

    const { locale } = useConfig();

    const containerRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => containerRef.current as HTMLDivElement);

    return (
      <div className={classes} style={styles} ref={containerRef}>
        {label && (
          <span className={gotoClasses}>
            {translate(locale.pagination.goto)}
          </span>
        )}
        <InputNumber
          value={current}
          onChange={(value) => handleChange(value)}
          onBlur={() => handleCurrentConfirmChange(current)}
          controls={false}
          status={isCurrentInvalid ? 'error' : undefined}
          onKeyDown={(event) =>
            getKeyboardEvents([
              [
                KEYCODE_CONFIRM,
                () => {
                  handleCurrentConfirmChange(current);
                },
              ],
            ])(event)
          }
        />
        <span className={separatorClasses}>/</span>
        <span className={pageCountClasses}>{pageCount}</span>
        {label && (
          <span className={pageClasses}>
            {translate(locale.pagination.page)}
          </span>
        )}
      </div>
    );
  },
);

PaginationJumper.displayName = 'PaginationJumper';
