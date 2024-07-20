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
        Align top
      </Divider>
      <Row gutter={8} align="top">
        <Col span={6}>
          <div style={{ height: '100px' }}>col</div>
        </Col>
        <Col span={6}>
          <div style={{ height: '40px' }}>col</div>
        </Col>
        <Col span={6}>
          <div style={{ height: '60px' }}>col</div>
        </Col>
        <Col span={6}>
          <div style={{ height: '80px' }}>col</div>
        </Col>
      </Row>

      <Divider layout="horizontal" align="start">
        Align middle
      </Divider>
      <Row gutter={8} align="middle">
        <Col span={6}>
          <div style={{ height: '100px' }}>col</div>
        </Col>
        <Col span={6}>
          <div style={{ height: '40px' }}>col</div>
        </Col>
        <Col span={6}>
          <div style={{ height: '60px' }}>col</div>
        </Col>
        <Col span={6}>
          <div style={{ height: '80px' }}>col</div>
        </Col>
      </Row>

      <Divider layout="horizontal" align="start">
        Align bottom
      </Divider>
      <Row gutter={8} align="bottom">
        <Col span={6}>
          <div style={{ height: '100px' }}>col</div>
        </Col>
        <Col span={6}>
          <div style={{ height: '40px' }}>col</div>
        </Col>
        <Col span={6}>
          <div style={{ height: '60px' }}>col</div>
        </Col>
        <Col span={6}>
          <div style={{ height: '80px' }}>col</div>
        </Col>
      </Row>
    </Space>
  );
};

export default GridAlignmentDemo;
