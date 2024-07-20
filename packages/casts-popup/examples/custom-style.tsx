// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { Popup } from '@casts/popup';
import { Space } from '@casts/space';
import { TokenCdsColorPaletteInfo500 } from '@casts/theme';

const PopupCustomStylesDemo = () => (
  <Space wrap>
    <Popup
      theme="anti"
      className="custom-popup-class"
      style={{ backgroundColor: TokenCdsColorPaletteInfo500 }}
      content={
        <div>
          <span>Popup title</span>
          <br />
          <span>Popup content</span>
        </div>
      }
    >
      <Button>Hover me</Button>
    </Popup>
  </Space>
);
export default PopupCustomStylesDemo;
