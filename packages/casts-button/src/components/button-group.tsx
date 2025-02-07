import { createContext, FC, ReactNode, useContext } from 'react';
import { ConfigContext } from '@casts/config-provider';
import clsx from 'clsx';

import { ButtonShape, ButtonSize, ButtonTheme, ButtonVariant } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/button-group.scss';

export type ButtonGroupProps = {
  /**
   * @default round
   */
  shape?: ButtonShape;
  /**
   * @default contained
   */
  variant?: ButtonVariant;
  /**
   * @default brand
   */
  theme?: ButtonTheme;
  /**
   * @default medium
   */
  size?: ButtonSize;
  /**
   * @default false
   */
  disabled?: boolean;
  children?: ReactNode;
};

export const ButtonGroupContext = createContext<ButtonGroupProps>({});

export const ButtonGroup: FC<ButtonGroupProps> = (props: ButtonGroupProps) => {
  const { children } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('button-group');
  const classes = clsx(prefixCls);

  return (
    <ButtonGroupContext.Provider value={props}>
      <div className={classes}>{children}</div>
    </ButtonGroupContext.Provider>
  );
};
