import { createContext, FC } from 'react';
import { BaseComponentProps } from '@casts/common';

export type BreadcrumbsContextValue = {
  maxItemWidth?: number | string;
};

export const defaultBreadcrumbsContextValue = {};

export const BreadcrumbsContext = createContext<BreadcrumbsContextValue>(
  defaultBreadcrumbsContextValue,
);

export type BreadcrumbsProviderProps = BaseComponentProps &
  BreadcrumbsContextValue;

export const BreadcrumbsProvider: FC<BreadcrumbsProviderProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <BreadcrumbsContext.Provider value={rest}>
      {children}
    </BreadcrumbsContext.Provider>
  );
};
