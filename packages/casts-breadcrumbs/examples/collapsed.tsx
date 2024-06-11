// @ts-ignore example should import React
import React from 'react';
import { BreadcrumbItem, Breadcrumbs } from '@casts/breadcrumbs';
import { Home2Fill } from '@casts/icons';
import { Space } from '@casts/space';

const BreadcrumbsCollapsedDemo = () => {
  return (
    <Space direction="vertical" size={40}>
      <Breadcrumbs maxCount={4} countBeforeCollapse={1} countAfterCollapse={2}>
        <BreadcrumbItem href="#" icon={<Home2Fill />}>
          Casts Design
        </BreadcrumbItem>
        <BreadcrumbItem>Components</BreadcrumbItem>
        <BreadcrumbItem>Navigator</BreadcrumbItem>
        <BreadcrumbItem>Before Breadcrumb</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>

      <Breadcrumbs maxCount={5} countBeforeCollapse={1} countAfterCollapse={2}>
        <BreadcrumbItem href="#" icon={<Home2Fill />}>
          Casts Design
        </BreadcrumbItem>
        <BreadcrumbItem>Components</BreadcrumbItem>
        <BreadcrumbItem>Navigator</BreadcrumbItem>
        <BreadcrumbItem>Before Breadcrumb</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>

      <Breadcrumbs
        maxCount={4}
        countBeforeCollapse={1}
        countAfterCollapse={2}
        renderCollapse={() => {
          return <span>...</span>;
        }}
      >
        <BreadcrumbItem href="#" icon={<Home2Fill />}>
          Casts Design
        </BreadcrumbItem>
        <BreadcrumbItem>Components</BreadcrumbItem>
        <BreadcrumbItem>Navigator</BreadcrumbItem>
        <BreadcrumbItem>Before Breadcrumb</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>
    </Space>
  );
};

export default BreadcrumbsCollapsedDemo;
