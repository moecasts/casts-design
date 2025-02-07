// @ts-ignore example should import React
import React, { useState } from 'react';
import { Button } from '@casts/button';
import { Dialog, OpenChangeHandler } from '@casts/dialog';
import { Space } from '@casts/space';

import '@casts/dialog/dist/esm/styles.scss';

const DialogSimpleDemo = () => {
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
        title={'Simple Dialog'}
        open={open}
        onCancel={onOpenChange}
        onConfirm={onOpenChange}
        simple
      >
        You can customize modal body text by the current situation. This modal
        will be closed immediately once you press the OK button.
      </Dialog>
    </Space>
  );
};

export default DialogSimpleDemo;
