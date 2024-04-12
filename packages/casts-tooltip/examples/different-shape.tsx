// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { Space } from '@casts/space';
import { Tooltip } from '@casts/tooltip';

import './test.scss';

const DifferentShapeDemo = () => (
  <Space wrap>
    <Tooltip
      shape="square"
      content={
        <div>
          <span>Tooltip content</span>
        </div>
      }
    >
      <Button>square tooltip</Button>
    </Tooltip>
    <Tooltip
      shape="round"
      content={
        <div>
          <span>Tooltip content</span>
        </div>
      }
    >
      <Button>round tooltip</Button>
    </Tooltip>
    <Tooltip
      shape="circle"
      content={
        <div>
          <span>Tooltip content</span>
        </div>
      }
    >
      <Button>circle tooltip</Button>
    </Tooltip>
  </Space>
);
export default DifferentShapeDemo;
