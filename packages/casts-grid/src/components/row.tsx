import {
  createContext,
  createElement,
  forwardRef,
  Ref,
  useContext,
} from 'react';

import { useRowStyles } from './hooks';
import { RowContextProps, RowProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/row.scss';

export const RowContext = createContext<RowContextProps>({});

export const useRowContext = () => useContext(RowContext);

export const Row = forwardRef((props: RowProps, ref: Ref<HTMLElement>) => {
  const { children, gutter, tag = 'div' } = props;

  const { classes, styles, size } = useRowStyles({ ...props });

  return (
    <RowContext.Provider value={{ gutter, size }}>
      {createElement(
        tag,
        {
          ref,
          className: classes,
          style: styles,
        },
        children,
      )}
    </RowContext.Provider>
  );
});

Row.displayName = 'Row';
