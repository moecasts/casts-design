// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { Popup } from '@casts/popup';
import { Space } from '@casts/space';

const DifferentPlacementDemo = () => (
  <Space direction="vertical">
    <Space style={{ justifyContent: 'center' }}>
      <Popup
        placement="top-start"
        content={
          <div>
            <span>Popup title</span>
            <br />
            <span>Popup content</span>
          </div>
        }
      >
        <Button style={{ width: '120px' }}>top-start</Button>
      </Popup>
      <Popup
        placement="top"
        content={
          <div>
            <span>Popup title</span>
            <br />
            <span>Popup content</span>
          </div>
        }
      >
        <Button style={{ width: '120px' }}>top</Button>
      </Popup>
      <Popup
        placement="top-end"
        content={
          <div>
            <span>Popup title</span>
            <br />
            <span>Popup content</span>
          </div>
        }
      >
        <Button style={{ width: '120px' }}>top-end</Button>
      </Popup>
    </Space>
    <Space size={[16, 150]}>
      <Space direction="vertical">
        <Popup
          placement="left-start"
          content={
            <div>
              <span>Popup title</span>
              <br />
              <span>Popup content</span>
              <br />
            </div>
          }
        >
          <Button style={{ width: '120px' }}>left-start</Button>
        </Popup>
        <Popup
          placement="left"
          content={
            <div>
              <span>Popup title</span>
              <br />
              <span>Popup content</span>
              <br />
            </div>
          }
        >
          <Button style={{ width: '120px' }}>left</Button>
        </Popup>
        <Popup
          placement="left-end"
          content={
            <div>
              <span>Popup title</span>
              <br />
              <span>Popup content</span>
              <br />
            </div>
          }
        >
          <Button style={{ width: '120px' }}>left-end</Button>
        </Popup>
      </Space>
      <Space direction="vertical">
        <Popup
          placement="right-start"
          content={
            <div>
              <span>Popup title</span>
              <br />
              <span>Popup content</span>
              <br />
            </div>
          }
        >
          <Button style={{ width: '120px' }}>right-start</Button>
        </Popup>
        <Popup
          placement="right"
          content={
            <div>
              <span>Popup title</span>
              <br />
              <span>Popup content</span>
              <br />
            </div>
          }
        >
          <Button style={{ width: '120px' }}>right</Button>
        </Popup>
        <Popup
          placement="right-end"
          content={
            <div>
              <span>Popup title</span>
              <br />
              <span>Popup content</span>
              <br />
            </div>
          }
        >
          <Button style={{ width: '120px' }}>right-end</Button>
        </Popup>
      </Space>
    </Space>
    <Space style={{ justifyContent: 'center' }}>
      <Popup
        placement="bottom-start"
        content={
          <div>
            <span>Popup title</span>
            <br />
            <span>Popup content</span>
          </div>
        }
      >
        <Button style={{ width: '120px' }}>bottom-start</Button>
      </Popup>
      <Popup
        placement="bottom"
        content={
          <div>
            <span>Popup title</span>
            <br />
            <span>Popup content</span>
          </div>
        }
      >
        <Button style={{ width: '120px' }}>bottom</Button>
      </Popup>
      <Popup
        placement="bottom-end"
        content={
          <div>
            <span>Popup title</span>
            <br />
            <span>Popup content</span>
          </div>
        }
      >
        <Button style={{ width: '120px' }}>bottom-end</Button>
      </Popup>
    </Space>
  </Space>
);
export default DifferentPlacementDemo;
