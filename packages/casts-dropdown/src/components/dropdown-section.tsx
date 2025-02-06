import { forwardRef, Ref } from 'react';

import { useDropdownSection } from './hooks';
import { DropdownSectionProps } from './types';

export const DropdownSection = forwardRef(
  (props: DropdownSectionProps, ref: Ref<HTMLDivElement>) => {
    const { classes, contentClasses, labelClasses, styles, label, children } =
      useDropdownSection(props);

    return (
      <div className={classes} style={styles} ref={ref}>
        {label && <div className={labelClasses}>{label}</div>}
        <div className={contentClasses}>{children}</div>
      </div>
    );
  },
);

DropdownSection.displayName = 'DropdownSection';
