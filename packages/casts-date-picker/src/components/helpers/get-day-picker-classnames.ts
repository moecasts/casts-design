/**
 * The UI elements composing DayPicker. These elements are mapped to
 * {@link CustomComponents}, the {@link ClassNames} and the {@link Styles} used by
 * DayPicker.
 *
 * Some of these elements are extended by flags and modifiers.
 */
export const getDayPickerClassNames = (prefixCls: string) => {
  const classNames = {
    /** The previous button in the navigation. */
    button_previous: `${prefixCls}-button-previous`,
    /** The next button the navigation. */
    button_next: `${prefixCls}-button-next`,
    /** The root component displaying the months and the navigation bar. */
    root: `${prefixCls}-root`,
    /** The Chevron SVG element used by navigation buttons and dropdowns. */
    chevron: `${prefixCls}-chevron`,
    /**
     * The grid cell with the day's date. Extended by {@link DayFlag} and
     * {@link SelectionFlag}.
     */
    day: `${prefixCls}-day`,
    /** The button containing the formatted day's date, inside the grid cell. */
    day_button: `${prefixCls}-day-button`,
    /** The caption label of the month (when not showing the dropdown navigation). */
    caption_label: `${prefixCls}-caption-label`,
    /** The container of the dropdown navigation (when enabled). */
    dropdowns: `${prefixCls}-dropdowns`,
    /** The dropdown element to select for years and months. */
    dropdown: `${prefixCls}-dropdown`,
    /** The container element of the dropdown. */
    dropdown_root: `${prefixCls}-dropdown-root`,
    /** The root element of the footer. */
    footer: `${prefixCls}-footer`,
    /** The month grid. */
    month_grid: `${prefixCls}-month-grid`,
    /** Contains the dropdown navigation or the caption label. */
    month_caption: `${prefixCls}-month-caption`,
    /** The dropdown with the months. */
    months_dropdown: `${prefixCls}-months-dropdown`,
    /** Wrapper of the month grid. */
    month: `${prefixCls}-month`,
    /** The container of the displayed months. */
    months: `${prefixCls}-months`,
    /** The navigation bar with the previous and next buttons. */
    nav: `${prefixCls}-nav`,
    /** The row containing the week. */
    week: `${prefixCls}-week`,
    /** The group of row weeks in a month (`tbody`). */
    weeks: `${prefixCls}-weeks`,
    /** The column header with the weekday. */
    weekday: `${prefixCls}-weekday`,
    /** The row grouping the weekdays in the column headers. */
    weekdays: `${prefixCls}-weekdays`,
    /** The cell containing the week number. */
    week_number: `${prefixCls}-week-number`,
    /** The cell header of the week numbers column. */
    week_number_header: `${prefixCls}-week-number-header`,
    /** The dropdown with the years. */
    years_dropdown: `${prefixCls}-years-dropdown`,

    /** The flags for the {@link UI.Day}. */
    /** The day is disabled. */
    disabled: `${prefixCls}-disabled`,
    /** The day is hidden. */
    hidden: `${prefixCls}-hidden`,
    /** The day is outside the current month. */
    outside: `${prefixCls}-outside`,
    /** The day is focused. */
    focused: `${prefixCls}-focused`,
    /** The day is today. */
    today: `${prefixCls}-today`,

    /**
     * The state that can be applied to the {@link UI.Day} element when in selection
     * mode.
     */
    /** The day is at the end of a selected range. */
    range_end: `${prefixCls}-range-end`,
    /** The day is at the middle of a selected range. */
    range_middle: `${prefixCls}-range-middle`,
    /** The day is at the start of a selected range. */
    range_start: `${prefixCls}-range-start`,
    /** The day is selected. */
    selected: `${prefixCls}-selected`,
  };

  return classNames;
};
