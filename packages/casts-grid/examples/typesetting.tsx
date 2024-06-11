// @ts-ignore example should import React
import React from 'react';
import { Divider } from '@casts/divider';
import { Col, Row } from '@casts/grid';
import { Space } from '@casts/space';

import './styles.scss';

export const GridAlignmentDemo = () => {
  return (
    <Space className="demo-grid" direction="vertical">
      <Divider layout="horizontal" align="start">
        Start
      </Divider>
      <Row gutter={8} justify="start">
        <Col span={4}>
          <div>col</div>
        </Col>
        <Col span={4}>
          <div>col</div>
        </Col>
        <Col span={4}>
          <div>col</div>
        </Col>
        <Col span={4}>
          <div>col</div>
        </Col>
      </Row>

      <Divider layout="horizontal" align="start">
        Center
      </Divider>
      <Row gutter={8} justify="center">
        <Col span={4}>
          <div>col</div>
        </Col>
        <Col span={4}>
          <div>col</div>
        </Col>
        <Col span={4}>
          <div>col</div>
        </Col>
        <Col span={4}>
          <div>col</div>
        </Col>
      </Row>

      <Divider layout="horizontal" align="start">
        End
      </Divider>
      <Row gutter={8} justify="end">
        <Col span={4}>
          <div>col</div>
        </Col>
        <Col span={4}>
          <div>col</div>
        </Col>
        <Col span={4}>
          <div>col</div>
        </Col>
        <Col span={4}>
          <div>col</div>
        </Col>
      </Row>

      <Divider layout="horizontal" align="start">
        Space-between
      </Divider>
      <Row gutter={8} justify="space-between">
        <Col span={4}>
          <div>col</div>
        </Col>
        <Col span={4}>
          <div>col</div>
        </Col>
        <Col span={4}>
          <div>col</div>
        </Col>
        <Col span={4}>
          <div>col</div>
        </Col>
      </Row>

      <Divider layout="horizontal" align="start">
        Space-around
      </Divider>
      <Row gutter={8} justify="space-around">
        <Col span={4}>
          <div>col</div>
        </Col>
        <Col span={4}>
          <div>col</div>
        </Col>
        <Col span={4}>
          <div>col</div>
        </Col>
        <Col span={4}>
          <div>col</div>
        </Col>
      </Row>
    </Space>
  );
};

export default GridAlignmentDemo;
