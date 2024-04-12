// @ts-ignore example should import React
import React from 'react';
import { Col, Row } from '@casts/grid';
import { Space } from '@casts/space';

import './styles.scss';

export const GridOffsetDemo = () => {
  return (
    <Space className="demo-grid" direction="vertical">
      <Row gutter={8}>
        <Col span={8}>
          <div>col</div>
        </Col>
        <Col span={8}>
          <div>col</div>
        </Col>
      </Row>

      <Row gutter={8}>
        <Col span={8}>
          <div>col</div>
        </Col>
        <Col span={8} offset={8}>
          <div>col</div>
        </Col>
      </Row>

      <Row gutter={8}>
        <Col span={8} offset={2}>
          <div>col</div>
        </Col>
        <Col span={8} offset={4}>
          <div>col</div>
        </Col>
      </Row>
    </Space>
  );
};

export default GridOffsetDemo;
