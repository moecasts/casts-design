import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  Ref,
  RefObject,
} from 'react';
import { useCollapse } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { CdsMotionDurationFast } from '@casts/theme';
import { Controller } from 'react-hook-form';
import { CSSTransition } from 'react-transition-group';

import { useFormContext } from './form-context';
import { useFormControl } from './hooks';
import { FormControlProps } from './types';

export const DEFAULT_DURATION = parseFloat(CdsMotionDurationFast);

export const FormControl = forwardRef(
  (props: FormControlProps, ref: Ref<HTMLDivElement>) => {
    const {
      name,
      children,
      valuePropName = 'value',
      status,
      extra,
      help,
    } = props;

    const { getPrefixCls } = useConfig();
    const { control } = useFormContext();
    const {
      controlClasses,
      controlStyles,
      controlContentClasses,
      helpClasses,
      extraClasses,

      validate,
    } = useFormControl(props);

    const contentNode = !name ? (
      children
    ) : (
      <>
        <Controller
          name={name}
          control={control}
          rules={{
            validate,
          }}
          render={({ field }) => {
            const { value, ...rest } = field;

            return (
              <>
                {Children.map(children, (child) => {
                  if (!isValidElement(child)) {
                    return child;
                  }
                  return cloneElement(child as ReactElement, {
                    ...rest,
                    [valuePropName]: value,
                    status,
                  });
                })}
              </>
            );
          }}
        />
      </>
    );

    const { collapseRef, collapseStyles } = useCollapse({
      open: Boolean(extra),
    });

    return (
      <div className={controlClasses} style={controlStyles} ref={ref}>
        <div className={controlContentClasses}>{contentNode}</div>
        {help && <div className={helpClasses}>{help}</div>}

        <CSSTransition
          timeout={DEFAULT_DURATION}
          in={Boolean(extra)}
          classNames={getPrefixCls('fade')}
          unmountOnExit
          nodeRef={collapseRef}
        >
          <div
            className={extraClasses}
            ref={collapseRef as RefObject<HTMLDivElement>}
            style={collapseStyles}
          >
            {extra}
          </div>
        </CSSTransition>
      </div>
    );
  },
);

FormControl.displayName = 'FormControl';
