// @ts-ignore example should import React
import React from 'react';
import { BreadcrumbItem, Breadcrumbs } from '@casts/breadcrumbs';
import { Home2Fill } from '@casts/icons';
import { Space } from '@casts/space';

const BreadcrumbsMaxWidthDemo = () => {
  return (
    <Space direction="vertical" size={40}>
      <Breadcrumbs maxItemWidth={80}>
        <BreadcrumbItem href="#" icon={<Home2Fill />} maxItemWidth={100}>
          Casts Design
        </BreadcrumbItem>
        <BreadcrumbItem>Components</BreadcrumbItem>
        <BreadcrumbItem>Navigator</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>
    </Space>
  );
};

export default BreadcrumbsMaxWidthDemo;
