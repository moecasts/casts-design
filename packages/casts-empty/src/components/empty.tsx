import { forwardRef, Ref } from 'react';

import { useEmpty } from './hooks';
import { EmptyProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/empty.scss';

export const Empty = forwardRef(
  (props: EmptyProps, ref: Ref<HTMLDivElement>) => {
    const {
      classes,
      styles,
      imageClasses,
      imageStyles,
      descriptionClasses,
      description,
      image,
    } = useEmpty(props);

    return (
      <div className={classes} style={styles} ref={ref}>
        {image && (
          <div className={imageClasses} style={imageStyles}>
            {image}
          </div>
        )}
        {description && <div className={descriptionClasses}>{description}</div>}
      </div>
    );
  },
);

Empty.displayName = 'Empty';
