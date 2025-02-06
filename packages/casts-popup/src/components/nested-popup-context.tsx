import { createContext, FC, ReactNode, useContext } from 'react';
import { Placement } from '@casts/common';

type NestedPopupContextType = {
  placement?: Placement;
  nestedPlacement?: Placement;
};

const NestedPopupContext = createContext<NestedPopupContextType | undefined>(
  undefined,
);

export type NestedPopupProviderProps = NestedPopupContextType & {
  children: ReactNode;
};

export const NestedPopupProvider: FC<NestedPopupProviderProps> = (props) => {
  const { placement, nestedPlacement, children } = props;

  return (
    <NestedPopupContext.Provider value={{ placement, nestedPlacement }}>
      {children}
    </NestedPopupContext.Provider>
  );
};

export const useNestedPopupContext = () => useContext(NestedPopupContext);
