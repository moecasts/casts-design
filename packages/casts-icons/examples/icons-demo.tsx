// @ts-ignore example should import React
import React from 'react';
import { capitalize, groupBy } from '@casts/common';
import * as IconComponents from '@casts/icons';
import { message } from '@casts/message';
import { Space } from '@casts/space';
import { Heading } from '@casts/typography';
import copy from 'copy-to-clipboard';

import { list } from './icon-list';

import './styles.scss';

type AllIcons = Record<
  string,
  {
    name: string;
    icons: Record<string, string[]>;
  }
>;

const groupIconsByType = (allIcons: typeof list): AllIcons => {
  const groupedIcons = Object.keys(allIcons).reduce((acc, categoryKey) => {
    const groupedIconsInCategory = groupBy(
      [
        ...allIcons[categoryKey].icons.line,
        ...allIcons[categoryKey].icons.fill,
      ],
      (iconName) => {
        return iconName.replace(/(Line|Fill)$/, '');
      },
    );

    const category = {
      ...allIcons[categoryKey],
      icons: groupedIconsInCategory,
    };

    return {
      ...acc,
      [categoryKey]: category,
    };
  }, {} as AllIcons);

  return groupedIcons;
};

const allIcons = groupIconsByType(list);

const IconsDemo = () => {
  return (
    <Space className="icons-demo-container" direction="vertical" size={64}>
      {Object.keys(allIcons).map((key) => {
        const originCategory = list[key];
        const category = allIcons[key as keyof typeof allIcons];

        return (
          <Space key={category.name} direction="vertical" size={20}>
            <Heading level={3}>
              {capitalize(category.name)}
              <span>
                &nbsp; (
                {originCategory.icons.line.length +
                  originCategory.icons.fill.length}
                )
              </span>
            </Heading>

            <Space
              wrap
              size={[20, 20]}
              style={{ justifyContent: 'center' }}
              className="docs-icon-container"
            >
              {Object.keys(category.icons).map((iconPrefix) => {
                return (
                  <Space
                    direction="vertical"
                    key={iconPrefix}
                    className={'docs-icon-item-group'}
                    size={4}
                  >
                    {category.icons[iconPrefix].map((iconName: string) => {
                      const IconComponent =
                        IconComponents[iconName as keyof typeof IconComponents];
                      const code = `<${iconName} />`;
                      const handleCopy = () => {
                        copy(code);
                        message.closeAll();
                        message.success(`copied: ${code}`);
                      };

                      return (
                        <Space
                          className="docs-icon-item"
                          direction="vertical"
                          key={iconName}
                          style={{
                            alignItems: 'center',
                            cursor: 'pointer',
                          }}
                          size={4}
                          onClick={handleCopy}
                        >
                          <IconComponent className={'docs-icon'} />
                          <span className="docs-icon-code">{iconName}</span>
                        </Space>
                      );
                    })}
                  </Space>
                );
              })}
            </Space>
          </Space>
        );
      })}
    </Space>
  );
};

export default IconsDemo;
