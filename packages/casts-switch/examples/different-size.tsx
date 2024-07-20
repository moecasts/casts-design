// @ts-ignore example should import React
import React from 'react';
import { Space } from '@casts/space';
import { Switch } from '@casts/switch';

import './styles.scss';

export const SwitchSizeDemo = () => {
  return (
    <Space className="demo-switch-area" direction="vertical">
      <Space direction="vertical">
        <Switch label="Label" size="small" />
        <Switch label="Label" size="medium" />
        <Switch label="Label" size="large" />
      </Space>
    </Space>
  );
};

export default SwitchSizeDemo;
