// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { Popup } from '@casts/popup';
import { Space } from '@casts/space';

const AttachDemo = () => {
  return (
    <Space wrap>
      <Popup
        placement="right"
        trigger="click"
        content={
          <div>
            <span>Popup title</span>
            <br />
            <span>Popup content</span>
          </div>
        }
        attach=".custom-popup-root"
      >
        <Button>custom attach node</Button>
      </Popup>
      <div className="custom-popup-root"></div>
    </Space>
  );
};
export default AttachDemo;
