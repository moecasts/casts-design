import { forwardRef, Ref } from 'react';

import {
  useTimePickerPanel,
  UseTimePickerPanelProps,
} from './hooks/use-time-picker-panel';

export type TimePickerPanelProps = UseTimePickerPanelProps;

export const TimePickerPanel = forwardRef(
  (props: TimePickerPanelProps, ref: Ref<HTMLDivElement>) => {
    const {
      value,
      classes,
      styles,
      columns,
      columnClasses,
      getCellClasses,
      headerClasses,
      bodyClasses,
      columnMaskClasses,
      handleColumnScroll,
      handleCellClick,
      columnRefs,
      valueDisplay,
    } = useTimePickerPanel(props);

    return (
      <div ref={ref} className={classes} style={styles}>
        <div className={headerClasses}>
          <span>{valueDisplay}</span>
        </div>
        <div className={bodyClasses}>
          {value && (
            <div className={columnMaskClasses}>
              {columns.map((_, index) => (
                <div key={index}></div>
              ))}
            </div>
          )}
          {columns.map((column, index) => (
            <ul
              ref={(el) => {
                columnRefs.current[index] = el as HTMLElement;
              }}
              className={columnClasses}
              key={index}
              onScroll={(e) => handleColumnScroll.run(index, e)}
            >
              {column.map((cell, current) => {
                return (
                  <li
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                    role="button"
                    className={getCellClasses(index, cell)}
                    key={cell}
                    onClick={() => {
                      handleCellClick({
                        segment: index,
                        current,
                      });
                    }}
                    onKeyDown={() => {
                      handleCellClick({
                        segment: index,
                        current,
                      });
                    }}
                    tabIndex={0}
                  >
                    {cell}
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div>
    );
  },
);

TimePickerPanel.displayName = 'TimePickerPanel';
