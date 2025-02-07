import { createContext, FC, ReactNode, useContext } from 'react';
import { Placement } from '@casts/common';

type PopupContextType = {
  placement?: Placement;
  nestedPlacement?: Placement;
};

const PopupContext = createContext<PopupContextType>({});

export type PopupProviderProps = PopupContextType & {
  children: ReactNode;
};

export const PopupProvider: FC<PopupProviderProps> = (props) => {
  const { placement, nestedPlacement, children } = props;

  return (
    <PopupContext.Provider value={{ placement, nestedPlacement }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopupContext = () => useContext(PopupContext);
