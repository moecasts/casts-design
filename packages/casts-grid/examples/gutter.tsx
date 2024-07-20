// @ts-ignore example should import React
import React from 'react';
import { Divider } from '@casts/divider';
import { Col, Row } from '@casts/grid';
import { Space } from '@casts/space';

import './styles.scss';

const generateColumns = (count: number) => {
  const span = 24 / count;

  return [...new Array(count)].map((_, idx) => (
    <Col span={span} key={idx}>
      <div>col-{span}</div>
    </Col>
  ));
};

export const GridGutterDemo = () => {
  return (
    <Space className="demo-grid" direction="vertical">
      <Divider layout="horizontal" align="start">
        Horizontal
      </Divider>
      <Row gutter={16}>{generateColumns(4)}</Row>

      <Divider layout="horizontal" align="start">
        Responsive
      </Divider>
      <Row
        gutter={{
          xsmall: 4,
          small: 8,
          medium: 16,
          large: 32,
          xlarge: 48,
          xxlarge: 64,
        }}
      >
        {generateColumns(4)}
      </Row>

      <Divider layout="horizontal" align="start">
        Vertical
      </Divider>
      <Row gutter={[16, 32]}>
        {generateColumns(4)}
        {generateColumns(4)}
      </Row>
    </Space>
  );
};

export default GridGutterDemo;
