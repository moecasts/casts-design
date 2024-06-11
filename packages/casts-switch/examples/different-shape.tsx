// @ts-ignore example should import React
import React from 'react';
import { Space } from '@casts/space';
import { Switch } from '@casts/switch';

import './styles.scss';

export const SwitchShapeDemo = () => {
  return (
    <Space className="demo-switch-area" direction="vertical">
      <Space direction="vertical">
        <Switch label="Label" shape="pill" />
        <Switch label="Label" shape="round" />
      </Space>
    </Space>
  );
};

export default SwitchShapeDemo;
