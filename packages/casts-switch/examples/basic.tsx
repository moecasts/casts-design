// @ts-ignore example should import React
import React, { useState } from 'react';
import { Space } from '@casts/space';
import { Switch } from '@casts/switch';

import './styles.scss';

export const SwitchBasicDemo = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Space className="demo-switch-area" direction="vertical">
      <Switch />
      <Switch defaultChecked={true} />
      <Switch checked={checked} onChange={(checked) => setChecked(checked)} />
      <Switch label="Label" />
      <Switch disabled label="Label" />
      <Switch disabled defaultChecked={true} label="Label" />
    </Space>
  );
};

export default SwitchBasicDemo;
