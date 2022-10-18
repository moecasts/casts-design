import React, { FC, ReactElement } from 'react';
import { Space } from '@casts/space';
import { Heading } from '@casts/typography';
import copy from 'copy-to-clipboard';
import '@casts/icons/dist/esm/styles.scss';
import './styles.scss';

export type IconListProps = {
  list: {
    [key: string]: Record<string, ReactElement>;
  };
};

export const IconList: FC<IconListProps> = (props) => {
  const { list } = props;

  return (
    <>
      {Object.keys(list).map((cat) => (
        <Space
          wrap
          size={[40, 20]}
          key={cat}
          style={{ justifyContent: 'center' }}
        >
          {Object.keys(list[cat]).map((iconName) => {
            const IconComponent = list[cat][iconName];
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
                {/* @ts-ignore icon component */}
                <IconComponent size="48px" />
                <Heading level={6}>{code}</Heading>
              </Space>
            );
          })}
        </Space>
      ))}
    </>
  );
};
