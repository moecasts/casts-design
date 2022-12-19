import React from 'react';
import { Space } from '@casts/space';
import { Layout } from '@casts/layout';
import './demo.scss';

const { Header, Content, Footer, Aside } = Layout as any;
export const LayoutBasicDemo = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }} size={40}>
      <Layout className="demo-layout">
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>

      <Layout className="demo-layout">
        <Header>Header</Header>
        <Layout>
          <Aside>Aside</Aside>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>

      <Layout className="demo-layout">
        <Header>Header</Header>
        <Layout>
          <Content>Content</Content>
          <Aside>Aside</Aside>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>

      <Layout className="demo-layout">
        <Header>Header</Header>
        <Layout>
          <Aside>Aside</Aside>
          <Layout>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>

      <Layout className="demo-layout">
        <Aside>Aside</Aside>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Space>
  );
};

export default LayoutBasicDemo;
