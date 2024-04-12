// @ts-ignore example should import React
import React, { useState } from 'react';
import { Button } from '@casts/button';
import { Space } from '@casts/space';

import '@casts/button/dist/esm/styles.scss';

const LoadingButtonsDemo = () => {
  const [loading0, setLoading0] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [loading4, setLoading4] = useState(false);
  const setLoadingMap = [
    setLoading0,
    setLoading1,
    setLoading2,
    setLoading3,
    setLoading4,
  ];
  const onClick = (index: number) => {
    setLoadingMap[index](true);
    setTimeout(() => {
      setLoadingMap[index](false);
    }, 2000);
  };
  return (
    <Space direction="vertical">
      <Space wrap>
        <Button loading variant="contained">
          Button
        </Button>
        <Button loading variant="outline">
          Button
        </Button>
        <Button loading variant="dashed">
          Button
        </Button>
        <Button loading variant="text">
          Button
        </Button>
        <Button loading variant="link">
          Button
        </Button>
      </Space>
      <Space wrap>
        <Button
          loading={loading0}
          onClick={() => onClick(0)}
          variant="contained"
        >
          Button
        </Button>
        <Button loading={loading1} onClick={() => onClick(1)} variant="outline">
          Button
        </Button>
        <Button loading={loading2} onClick={() => onClick(2)} variant="dashed">
          Button
        </Button>
        <Button loading={loading3} onClick={() => onClick(3)} variant="text">
          Button
        </Button>
        <Button loading={loading4} onClick={() => onClick(4)} variant="link">
          Button
        </Button>
      </Space>
    </Space>
  );
};

export default LoadingButtonsDemo;
