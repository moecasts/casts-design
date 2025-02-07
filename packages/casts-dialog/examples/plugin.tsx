// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { DialogPlugin } from '@casts/dialog';
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

const DialogPluginDemo = () => {
  return (
    <Space>
      <Button onClick={() => dialog.show()}>Open Dialog</Button>
    </Space>
  );
};

export default DialogPluginDemo;
