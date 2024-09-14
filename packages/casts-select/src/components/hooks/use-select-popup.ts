import { noop, useControlled } from '@casts/common';

export const useSelectOpen = (props: any) => {
  const { onOpenChange = noop } = props;

  const [open, setOpen] = useControlled(props, 'open', onOpenChange);

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
  };

  return {
    open,
    handleOpenChange,
  };
};
