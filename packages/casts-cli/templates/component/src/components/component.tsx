import { forwardRef, Ref } from 'react';

import { use<%= componentNamePascalCase %> } from './hooks';
import { <%= componentNamePascalCase %>Props } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/<%= componentName %>.scss';

export const <%= componentNamePascalCase %> = forwardRef(
  (props: <%= componentNamePascalCase %>Props, ref: Ref<HTMLDivElement>) => {
    const {} = use<%= componentNamePascalCase %>(props);

    return null;
  },
);

<%= componentNamePascalCase %>.displayName = '<%= componentNamePascalCase %>';
