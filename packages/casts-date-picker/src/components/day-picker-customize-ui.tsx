import { ChangeEvent } from 'react';
import { Button } from '@casts/button';
import { useConfig } from '@casts/config-provider';
import { ArrowLeftSLine, ArrowRightSLine, CircleLine } from '@casts/icons';
// import { Dropdown } from '@casts/dropdown';
import { Select } from '@casts/select';
import { clsx } from 'clsx';
import { CustomComponents, useDayPicker } from 'react-day-picker';

export const Nav = () => {
  const { nextMonth, previousMonth, goToMonth } = useDayPicker();
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('date-picker-navigator');

  const classes = clsx(prefixCls);
  const prevClasses = `${prefixCls}-prev`;
  const currentClasses = `${prefixCls}-current`;
  const nextClasses = `${prefixCls}-next`;

  const handlePreviousMonthClick = () => {
    if (previousMonth) {
      goToMonth(previousMonth);
    }
  };

  const handleCurrentClick = () => {
    const today = new Date();
    goToMonth(today);
  };

  const handleNextMonthClick = () => {
    if (nextMonth) {
      goToMonth(nextMonth);
    }
  };

  return (
    <div className={classes}>
      <Button
        theme="neutral"
        variant="text"
        className={prevClasses}
        icon={<ArrowLeftSLine />}
        onClick={handlePreviousMonthClick}
      ></Button>

      <Button
        theme="neutral"
        variant="text"
        className={currentClasses}
        icon={<CircleLine />}
        onClick={handleCurrentClick}
      ></Button>

      <Button
        theme="neutral"
        variant="text"
        className={nextClasses}
        icon={<ArrowRightSLine />}
        onClick={handleNextMonthClick}
      ></Button>
    </div>
  );
};

export const DayButton = (
  props: Parameters<CustomComponents['DayButton']>[0],
) => {
  const { day: _day, children, modifiers, ...rest } = props;
  return (
    // @ts-ignore spread rest props
    <Button
      {...rest}
      disabled={modifiers.outside}
      variant={modifiers.selected ? 'contained' : 'text'}
      theme={modifiers.selected ? 'brand' : 'neutral'}
      pastel
      // pastel={modifiers.range_start || modifiers.range_end ? false : true}
    >
      {children}
    </Button>
  );
};

export const DayPickerDropdown = (
  props: Parameters<CustomComponents['Dropdown']>[0],
) => {
  return (
    <span style={{ marginLeft: '4px' }}>
      {/* <Dropdown */}
      {/*   options={props.options} */}
      {/*   onClick={(option) => { */}
      {/*     const e: ChangeEvent<HTMLSelectElement> = { */}
      {/*       target: { value: option }, */}
      {/*     } as ChangeEvent<HTMLSelectElement>; */}
      {/**/}
      {/*     props.onChange?.(e); */}
      {/*   }} */}
      {/* > */}
      {/*   {props.options?.find((option) => option.value === props.value)?.label || */}
      {/*     '-'} */}
      {/* </Dropdown> */}

      <Select
        // virtual={false}
        width={100}
        className={props.className}
        value={props.value}
        options={props.options}
        showFlipArrow={false}
        onChange={(option) => {
          const e: ChangeEvent<HTMLSelectElement> = {
            target: { value: option },
          } as ChangeEvent<HTMLSelectElement>;

          props.onChange?.(e);
        }}
        inputProps={{ autoWidth: true }}
      ></Select>
    </span>
  );
};

export const getDayPickerComponents = () => ({
  Nav,
  DayButton,
  Dropdown: DayPickerDropdown,
});
