// @ts-ignore example should import React
import React from 'react';
import { Space } from '@casts/space';
import { Switch } from '@casts/switch';

import './styles.scss';

export const SwitchLoadingDemo = () => {
  return (
    <Space className="demo-switch-area" direction="vertical">
      <Switch size="large" loading />
      <Switch size="large" loading defaultChecked={true} />
    </Space>
  );
};

export default SwitchLoadingDemo;
