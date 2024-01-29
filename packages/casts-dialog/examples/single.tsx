// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { DialogPlugin } from '@casts/dialog';
import { Space } from '@casts/space';

import '@casts/dialog/dist/esm/styles.scss';

const dialog1 = DialogPlugin({
  defaultOpen: false,
  title: 'Dialog Plugin 1',
  single: true,
  content: (
    <div>
      Dialog 2
      <br />
      <br />
      <br />
      <br />
      <Button onClick={() => dialog2.show()}>Open</Button>
    </div>
  ),
  onCancel: (_, context) => {
    console.log('onCancel', context);
    dialog1.destroy();
    // dialog1.hide();
  },
  onConfirm: (_, context) => {
    console.log('onConfirm', context);
    dialog1.destroy();
    // dialog1.hide();
  },
});

const dialog2 = DialogPlugin({
  defaultOpen: false,
  title: 'Dialog Plugin 2',
  single: true,
  content: (
    <>
      You can customize modal body text by the current situation. This modal
      will be closed immediately once you press the OK button.
    </>
  ),
  onCancel: (_, context) => {
    console.log('onCancel', context);
    dialog2.destroy();
  },
  onConfirm: (_, context) => {
    console.log('onConfirm', context);
    dialog2.destroy();
    // dialog2.hide();
  },
});

const DialogPluginDemo = () => {
  return (
    <Space>
      <Button onClick={() => dialog1.show()}>Open Dialog</Button>
    </Space>
  );
};

export default DialogPluginDemo;
