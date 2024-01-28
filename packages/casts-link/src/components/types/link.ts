import { AnchorHTMLAttributes } from 'react';
import { BaseComponentProps, Size } from '@casts/common';

export type LinkTheme =
  | 'brand'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'disabled'
  | 'neutral';

export type UseLinkProps = BaseComponentProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    /** link theme */
    theme?: LinkTheme;
    /** link size */
    size?: Size;
    /** underline visible behavior */
    underline?: boolean | 'hover';
  };

export type LinkProps = UseLinkProps;
