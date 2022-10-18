import React, { useState } from 'react';
import { Button } from '@casts/button';
import { Popup } from '@casts/popup';
import { Space } from '@casts/space';

const ArrowlessDemo = () => {
  const [showArrow, setShowArrow] = useState(true);
  return (
    <Space wrap>
      <Popup
        placement="right"
        showArrow={showArrow}
        content={
          <div>
            <span>Popup title</span>
            <br />
            <span>Popup content</span>
          </div>
        }
      >
        <Button onClick={() => setShowArrow(!showArrow)}>
          toggle show arrow
        </Button>
      </Popup>
    </Space>
  );
};
export default ArrowlessDemo;
