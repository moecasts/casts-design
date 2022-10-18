import React, { useState } from 'react';
import { Button } from '@casts/button';
import { Popup } from '@casts/popup';
import { Space } from '@casts/space';

const DisabledDemo = () => {
  return (
    <Space wrap>
      <div className="custom-popup-root"></div>
      <Popup
        placement="right"
        disabled
        content={
          <div>
            <span>Popup title</span>
            <br />
            <span>Popup content</span>
          </div>
        }
        attach=".custom-popup-root"
      >
        <Button>disabled</Button>
      </Popup>
    </Space>
  );
};
export default DisabledDemo;
