import { createContext, createElement, FC, ReactNode } from 'react';
import { BaseComponentProps } from '@casts/common';
import { ArrowRightSLine } from '@casts/icons';
import { TooltipProps } from '@casts/tooltip';

export type BreadcrumbsContextValue = {
  maxItemWidth?: number | string;
  separator?: ReactNode;
  tooltipProps?: Partial<TooltipProps>;
};

export const defaultBreadcrumbsContextValue: BreadcrumbsContextValue = {
  separator: createElement(ArrowRightSLine),
};

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
