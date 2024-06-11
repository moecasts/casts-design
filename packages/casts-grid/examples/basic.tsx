// @ts-ignore example should import React
import React from 'react';
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

export const GridBasicDemo = () => {
  return (
    <Space className="demo-grid" direction="vertical">
      <Row>{generateColumns(1)}</Row>
      <Row>{generateColumns(2)}</Row>
      <Row>{generateColumns(3)}</Row>
      <Row>{generateColumns(4)}</Row>
    </Space>
  );
};

export default GridBasicDemo;
