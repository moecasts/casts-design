import { createContext, FC, useContext } from 'react';
import { BaseComponentProps } from '@casts/common';

import { DropdownContextValue } from './types';

export const DropdownContext = createContext<DropdownContextValue>({});

export type DropdownProviderProps = Pick<BaseComponentProps, 'children'> &
  DropdownContextValue;

export const DropdownProvider: FC<DropdownProviderProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <DropdownContext.Provider value={rest}>{children}</DropdownContext.Provider>
  );
};

export const useDropdownContext = () => useContext(DropdownContext);
