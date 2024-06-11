// @ts-ignore example should import React
import React from 'react';
import { BreadcrumbItem, Breadcrumbs } from '@casts/breadcrumbs';
import { ExpandRightLine, Home2Fill } from '@casts/icons';
import { Space } from '@casts/space';

const BreadcrumbsCustomSeparatorDemo = () => {
  return (
    <Space direction="vertical" size={40}>
      <Breadcrumbs separator={'/'}>
        <BreadcrumbItem href="#" icon={<Home2Fill />}>
          Casts Design
        </BreadcrumbItem>
        <BreadcrumbItem>Components</BreadcrumbItem>
        <BreadcrumbItem>Navigator</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>

      <Breadcrumbs separator={'/'}>
        <BreadcrumbItem href="#" icon={<Home2Fill />}>
          Casts Design
        </BreadcrumbItem>
        <BreadcrumbItem separator={<ExpandRightLine />}>
          Components
        </BreadcrumbItem>
        <BreadcrumbItem>Navigator</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>
    </Space>
  );
};

export default BreadcrumbsCustomSeparatorDemo;
