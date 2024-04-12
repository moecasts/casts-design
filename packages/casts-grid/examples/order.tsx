// @ts-ignore example should import React
import React from 'react';
import { Divider } from '@casts/divider';
import { Col, Row } from '@casts/grid';
import { Space } from '@casts/space';

import './styles.scss';

export const GridOrderDemo = () => {
  return (
    <Space className="demo-grid" direction="vertical">
      <Divider layout="horizontal" align="start">
        using `order` to order
      </Divider>
      <Row gutter={8}>
        <Col span={6} order={4}>
          <div>col-1</div>
        </Col>
        <Col span={6} order={3}>
          <div>col-2</div>
        </Col>
        <Col span={6}>
          <div>col-3</div>
        </Col>
        <Col span={6}>
          <div>col-4</div>
        </Col>
      </Row>

      <Divider layout="horizontal" align="start">
        using `push` and `push` to order
      </Divider>
      <Row gutter={8}>
        <Col span={10} push={14}>
          <div>col-push-12</div>
        </Col>
        <Col span={14} pull={10}>
          <div>col-pull-10</div>
        </Col>
      </Row>
    </Space>
  );
};

export default GridOrderDemo;
