// @ts-ignore example should import React
import React from 'react';
import { capitalize } from '@casts/common';
import * as IconComponents from '@casts/icons';
import { Space } from '@casts/space';
import { Heading } from '@casts/typography';
import copy from 'copy-to-clipboard';

import { list } from './icon-list';

const IconsDemo = () => {
  return (
    <Space className="icons-demo-container" direction="vertical" size={64}>
      {Object.keys(list).map((key) => {
        const category = list[key as keyof typeof list];

        return (
          <Space key={category.name} direction="vertical" size={20}>
            <Heading level={3}>
              {category.name}
              <span>
                &nbsp; (
                {category.icons.line.length + category.icons.fill.length})
              </span>
            </Heading>

            {Object.keys(category.icons).map((type) => (
              <Space direction="vertical" key={type}>
                <Heading level={4}>
                  {capitalize(type)}
                  <span>&nbsp;({category.icons[type].length})</span>
                </Heading>

                <Space
                  wrap
                  size={[40, 20]}
                  key={type}
                  style={{ justifyContent: 'center' }}
                >
                  {category.icons[type].map((iconName: string) => {
                    const IconComponent = IconComponents[iconName];
                    const code = `<${iconName} />`;
                    const handleCopy = () => {
                      copy(code);
                      alert(`copied: ${code}`);
                    };

                    return (
                      <Space
                        className="docs-icon-wrap"
                        direction="vertical"
                        key={iconName}
                        style={{
                          alignItems: 'center',
                          width: '180px',
                          whiteSpace: 'nowrap',
                          cursor: 'pointer',
                        }}
                        onClick={handleCopy}
                      >
                        <IconComponent size="32px" />

                        <Heading level={6}>{code}</Heading>
                      </Space>
                    );
                  })}
                </Space>
              </Space>
            ))}
          </Space>
        );
      })}
    </Space>
  );
};

export default IconsDemo;
