// @ts-ignore example should import React
import React from 'react';
import { BreadcrumbItem, Breadcrumbs } from '@casts/breadcrumbs';
import { Home2Fill } from '@casts/icons';
import { Space } from '@casts/space';

const BreadcrumbsBasicDemo = () => {
  return (
    <Space direction="vertical">
      <Breadcrumbs>
        <BreadcrumbItem href="/" icon={<Home2Fill />}>
          Casts Design
        </BreadcrumbItem>
        <BreadcrumbItem>Components</BreadcrumbItem>
        <BreadcrumbItem>Navigator</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>

      <Breadcrumbs separator={'/'}>
        <BreadcrumbItem href="/" icon={<Home2Fill />}>
          Casts Design
        </BreadcrumbItem>
        <BreadcrumbItem>Components</BreadcrumbItem>
        <BreadcrumbItem>Navigator</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>
    </Space>
  );
};

export default BreadcrumbsBasicDemo;
