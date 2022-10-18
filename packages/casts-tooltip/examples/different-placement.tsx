import React from 'react';
import { Button } from '@casts/button';
import { Tooltip } from '@casts/tooltip';
import { Space } from '@casts/space';

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
        <Button>top-start</Button>
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
        <Button>top</Button>
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
        <Button>top-end</Button>
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
          <Button>left-start</Button>
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
          <Button>left</Button>
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
          <Button>left-end</Button>
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
          <Button>right-start</Button>
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
          <Button>right</Button>
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
          <Button>right-end</Button>
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
        <Button>bottom-start</Button>
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
        <Button>bottom</Button>
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
        <Button>bottom-end</Button>
      </Tooltip>
    </Space>
  </Space>
);
export default DifferentPlacementDemo;
