// @ts-ignore example should import React
import React from 'react';
import { MoonFill, SunFill } from '@casts/icons';
import { Space } from '@casts/space';
import { Switch } from '@casts/switch';

import './styles.scss';

export const SwitchCustomizeIconDemo = () => {
  return (
    <Space className="demo-switch-area" direction="vertical">
      <Switch checkedIcon={<SunFill />} uncheckedIcon={<MoonFill />} />
    </Space>
  );
};

export default SwitchCustomizeIconDemo;
