import { forwardRef, Ref } from 'react';

import { useColors } from './hooks';
import { ColorsProps } from './types';

export const Colors = forwardRef(
  (props: ColorsProps, ref: Ref<HTMLDivElement>) => {
    const {} = useColors(props);

    return null;
  },
);

Colors.displayName = 'Colors';
