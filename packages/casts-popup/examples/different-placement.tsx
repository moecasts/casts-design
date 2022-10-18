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
        <Button>top-start</Button>
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
        <Button>top</Button>
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
        <Button>top-end</Button>
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
          <Button>left-start</Button>
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
          <Button>left</Button>
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
          <Button>left-end</Button>
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
          <Button>right-start</Button>
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
          <Button>right</Button>
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
          <Button>right-end</Button>
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
        <Button>bottom-start</Button>
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
        <Button>bottom</Button>
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
        <Button>bottom-end</Button>
      </Popup>
    </Space>
  </Space>
);
export default DifferentPlacementDemo;
