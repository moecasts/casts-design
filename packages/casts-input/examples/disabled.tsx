// @ts-ignore example should import React
import React from 'react';
import {
  CheckboxCircleLine,
  CloseCircleLine,
  InformationLine,
} from '@casts/icons';
import { Input } from '@casts/input';
import { Space } from '@casts/space';

const DisabledDemo = () => (
  <Space direction="vertical">
    <Input
      disabled
      placeholder="Please enter something"
      tips="this is a tips"
    />
    <Input
      disabled
      placeholder="Please enter something"
      tips="this is success tips"
      status="success"
      suffix={<CheckboxCircleLine />}
    />
    <Input
      disabled
      placeholder="Please enter something"
      tips="this is warning tips"
      status="warning"
      suffix={<InformationLine />}
    />
    <Input
      disabled
      placeholder="Please enter something"
      tips="this is error tips"
      status="error"
      suffix={<CloseCircleLine />}
    />
  </Space>
);

export default DisabledDemo;
