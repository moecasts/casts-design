// @ts-ignore example should import React
import React, { useState } from 'react';
import { Button } from '@casts/button';
import { Dialog, DialogPlugin, OpenChangeHandler } from '@casts/dialog';
import { Space } from '@casts/space';

import '@casts/dialog/dist/esm/styles.scss';

const dialog = DialogPlugin({
  defaultOpen: false,
  title: 'Dialog Plugin',
  content: (
    <>
      <p>
        You can customize modal body text by the current situation. This modal
        will be closed immediately once you press the OK button.
      </p>
    </>
  ),
  onCancel: (_, context) => {
    console.log('debug onCancel', context);
    dialog.destroy();
  },
  onConfirm: (_, context) => {
    console.log('debug onConfirm', context);
    dialog.destroy();
  },
});

const DialogBasicDemo = () => {
  const [open, setOpen] = useState(false);
  const onOpenChange: OpenChangeHandler = (open, context) => {
    console.log('debug onOpenChange', open, context);
    setOpen(open);
  };

  const showDialog = () => {
    // dialog.show();
    setOpen(true);
  };

  return (
    <Space>
      <Button onClick={() => showDialog()}>Open Dialog</Button>
      <Dialog
        title={'Basic Dialog'}
        open={open}
        onCancel={onOpenChange}
        onConfirm={onOpenChange}
      >
        You can customize modal body text by the current situation. This modal
        will be closed immediately once you press the OK button.
      </Dialog>
    </Space>
  );
};

export default DialogBasicDemo;
