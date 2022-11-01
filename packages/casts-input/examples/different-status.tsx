import React from 'react';
import { Input } from '@casts/input';
import { Space } from '@casts/space';

import {
  InformationLine,
  CheckboxCircleLine,
  CloseCircleLine,
} from '@casts/icons';

const DifferentStatusDemo = () => (
  <Space direction="vertical">
    <Input placeholder="Please enter something" tips="this is a tips" />
    <Input
      placeholder="Please enter something"
      tips="this is success tips"
      status="success"
      suffix={<CheckboxCircleLine />}
    />
    <Input
      placeholder="Please enter something"
      tips="this is warning tips"
      status="warning"
      suffix={<InformationLine />}
    />
    <Input
      placeholder="Please enter something"
      tips="this is error tips"
      status="error"
      suffix={<CloseCircleLine />}
    />
  </Space>
);

export default DifferentStatusDemo;