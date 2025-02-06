// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { Space } from '@casts/space';
import { Tooltip } from '@casts/tooltip';

const DifferentPlacementDemo = () => (
  <Space direction="vertical">
    <Space style={{ justifyContent: 'center' }}>
      <Tooltip
        placement="top-start"
        content={
          <div>
            <span>Tooltip title</span>
            <br />
            <span>Tooltip content</span>
          </div>
        }
      >
        <Button style={{ width: '120px' }}>top-start</Button>
      </Tooltip>
      <Tooltip
        placement="top"
        content={
          <div>
            <span>Tooltip title</span>
            <br />
            <span>Tooltip content</span>
          </div>
        }
      >
        <Button style={{ width: '120px' }}>top</Button>
      </Tooltip>
      <Tooltip
        placement="top-end"
        content={
          <div>
            <span>Tooltip title</span>
            <br />
            <span>Tooltip content</span>
          </div>
        }
      >
        <Button style={{ width: '120px' }}>top-end</Button>
      </Tooltip>
    </Space>
    <Space size={[16, 150]}>
      <Space direction="vertical">
        <Tooltip
          placement="left-start"
          content={
            <div>
              <span>Tooltip title</span>
              <br />
              <span>Tooltip content</span>
              <br />
            </div>
          }
        >
          <Button style={{ width: '120px' }}>left-start</Button>
        </Tooltip>
        <Tooltip
          placement="left"
          content={
            <div>
              <span>Tooltip title</span>
              <br />
              <span>Tooltip content</span>
              <br />
            </div>
          }
        >
          <Button style={{ width: '120px' }}>left</Button>
        </Tooltip>
        <Tooltip
          placement="left-end"
          content={
            <div>
              <span>Tooltip title</span>
              <br />
              <span>Tooltip content</span>
              <br />
            </div>
          }
        >
          <Button style={{ width: '120px' }}>left-end</Button>
        </Tooltip>
      </Space>
      <Space direction="vertical">
        <Tooltip
          placement="right-start"
          content={
            <div>
              <span>Tooltip title</span>
              <br />
              <span>Tooltip content</span>
              <br />
            </div>
          }
        >
          <Button style={{ width: '120px' }}>right-start</Button>
        </Tooltip>
        <Tooltip
          placement="right"
          content={
            <div>
              <span>Tooltip title</span>
              <br />
              <span>Tooltip content</span>
              <br />
            </div>
          }
        >
          <Button style={{ width: '120px' }}>right</Button>
        </Tooltip>
        <Tooltip
          placement="right-end"
          content={
            <div>
              <span>Tooltip title</span>
              <br />
              <span>Tooltip content</span>
              <br />
            </div>
          }
        >
          <Button style={{ width: '120px' }}>right-end</Button>
        </Tooltip>
      </Space>
    </Space>
    <Space style={{ justifyContent: 'center' }}>
      <Tooltip
        placement="bottom-start"
        content={
          <div>
            <span>Tooltip title</span>
            <br />
            <span>Tooltip content</span>
          </div>
        }
      >
        <Button style={{ width: '120px' }}>bottom-start</Button>
      </Tooltip>
      <Tooltip
        placement="bottom"
        content={
          <div>
            <span>Tooltip title</span>
            <br />
            <span>Tooltip content</span>
          </div>
        }
      >
        <Button style={{ width: '120px' }}>bottom</Button>
      </Tooltip>
      <Tooltip
        placement="bottom-end"
        content={
          <div>
            <span>Tooltip title</span>
            <br />
            <span>Tooltip content</span>
          </div>
        }
      >
        <Button style={{ width: '120px' }}>bottom-end</Button>
      </Tooltip>
    </Space>
  </Space>
);
export default DifferentPlacementDemo;
