import {
  ExtendedElements,
  ExtendedRefs,
  FloatingContext,
} from '@floating-ui/react';
import {
  ReferenceType,
  UseFloatingReturn as UseFloatingReturn_2,
} from '@floating-ui/react-dom';

type Prettify<T> = {
  [K in keyof T]: T[K];
};

export type UseFloatingReturn<RT extends ReferenceType = ReferenceType> =
  Prettify<
    UseFloatingReturn_2 & {
      /**
       * `FloatingContext`
       */
      context: Prettify<FloatingContext<RT>>;
      /**
       * Object containing the reference and floating refs and reactive setters.
       */
      refs: ExtendedRefs<RT>;
      elements: ExtendedElements<RT>;
    }
  >;
