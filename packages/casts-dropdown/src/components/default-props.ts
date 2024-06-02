import { DropdownProps } from './types';

export const defaultDropdownProps = {
  size: 'medium',
  trigger: 'click',
  placement: 'bottom-start',
  nestedPlacement: 'right-start',
  hideAfterClick: true,
} satisfies DropdownProps;
