// @ts-ignore example should import React
import React from 'react';
import { CircularProgress } from '@casts/progress';
import { Space } from '@casts/space';

const CircularDifferentColorsDemo = () => {
  return (
    <Space wrap style={{ display: 'flex' }}>
      <CircularProgress />
      <CircularProgress color="hsla(17, 83%, 52%, 1)" />
      <CircularProgress color="hsla(116, 46%, 50%, 1)" />
      <CircularProgress color="hsla(17, 83%, 52%, 1)" />
    </Space>
  );
};
export default CircularDifferentColorsDemo;
