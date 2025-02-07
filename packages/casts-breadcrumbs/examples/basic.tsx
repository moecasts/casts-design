// @ts-ignore example should import React
import React from 'react';
import { BreadcrumbItem, Breadcrumbs } from '@casts/breadcrumbs';
import { Button } from '@casts/button';
import { Home2Fill } from '@casts/icons';
import { Link } from '@casts/link';
import { Space } from '@casts/space';
import { Tag } from '@casts/tag';

const BreadcrumbsBasicDemo = () => {
  return (
    <Space direction="vertical" size={40}>
      <Breadcrumbs>
        <BreadcrumbItem href="#" icon={<Home2Fill />}>
          Casts Design
        </BreadcrumbItem>
        <BreadcrumbItem>Components</BreadcrumbItem>
        <BreadcrumbItem>Navigator</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumbs>

      <Breadcrumbs>
        <BreadcrumbItem href="#" icon={<Home2Fill />}>
          Casts Design
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Tag theme="warning">Components</Tag>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Button variant="text" size="small" theme="info">
            Navigator
          </Button>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link theme="success">Breadcrumbs</Link>
        </BreadcrumbItem>
      </Breadcrumbs>
    </Space>
  );
};

export default BreadcrumbsBasicDemo;
