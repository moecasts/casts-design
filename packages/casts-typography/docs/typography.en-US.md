---
title: Typography
group:
  title: General
nav:
  title: Components
  path: /components
---

# Typography

```tsx
import React from 'react';
import { Typography, Heading, Paragraph, Text } from '@casts/typography';
import '@casts/typography/dist/cjs/index.css';

const blockContent = `AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。得益于丰富的业务场景和用户需求挑战，AntV 经历多年积累与不断打磨，已支撑整个阿里集团内外 20000+ 业务系统，通过了日均千万级 UV 产品的严苛考验。
我们正在基础图表，图分析，图编辑，地理空间可视化，智能可视化等各个可视化的领域耕耘，欢迎同路人一起前行。`;

export default () => {
  return (
    <Typography>
      <Heading level={1}>Introduction</Heading>
      <Paragraph>
        In the process of internal desktop applications development, many
        different design specs and implementations would be involved, which
        might cause designers and developers difficulties and duplication and
        reduce the efficiency of development.
      </Paragraph>
      <Paragraph>
        After massive project practice and summaries, Ant Design, a design
        language for background applications, is refined by Ant UED Team, which
        aims to{' '}
        <Text strong>
          uniform the user interface specs for internal background projects,
          lower the unnecessary cost of design differences and implementation
          and liberate the resources of design and front-end development
        </Text>
        .
      </Paragraph>
      <Heading level={2}>Guidelines and Resources</Heading>
      <Paragraph>
        We supply a series of design principles, practical patterns and high
        quality design resources (<Text code>Sketch</Text> and{' '}
        <Text code>Axure</Text>), to help people create their product prototypes
        beautifully and efficiently.
      </Paragraph>

      <Paragraph>
        <ul>
          <li>
            <Text link href="#">
              Principles
            </Text>
          </li>
          <li>
            <Text link href="#">
              Patterns
            </Text>
          </li>
          <li>
            <Text link href="#">
              Resource Download
            </Text>
          </li>
        </ul>
      </Paragraph>

      <Paragraph>
        Press <Text keyboard>Esc</Text> to exit...
      </Paragraph>

      <Heading level={1}>介绍</Heading>
      <Paragraph>
        蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。
      </Paragraph>
      <Paragraph>
        随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁金服体验技术部）经过大量的项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系
        Ant Design。基于<Text mark>『确定』和『自然』</Text>
        的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于
        <Text strong>更好的用户体验</Text>。
      </Paragraph>
      <Heading level={2}>设计资源</Heading>
      <Paragraph>
        我们提供完善的设计原则、最佳实践和设计资源文件（<Text code>Sketch</Text>{' '}
        和<Text code>Axure</Text>），来帮助业务快速设计出高质量的产品原型。
      </Paragraph>

      <Paragraph>
        <ul>
          <li>
            <Text link href="#">
              设计原则
            </Text>
          </li>
          <li>
            <Text link href="#">
              设计模式
            </Text>
          </li>
          <li>
            <Text link href="#">
              设计资源
            </Text>
          </li>
        </ul>
      </Paragraph>

      <Paragraph>
        <blockquote>{blockContent}</blockquote>
        <pre>{blockContent}</pre>
      </Paragraph>

      <Paragraph>
        按<Text keyboard>Esc</Text>键退出阅读……
      </Paragraph>
    </Typography>
  );
};
```

## Heading

```tsx
import React from 'react';
import { Heading } from '@casts/typography';
import '@casts/typography/dist/cjs/index.css';

export default () => {
  return (
    <section>
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={5}>Heading 5</Heading>
      <Heading level={6}>Heading 6</Heading>
    </section>
  );
};
```

## Text

```tsx
import React from 'react';
import { Text } from '@casts/typography';
import '@casts/typography/dist/cjs/index.css';

export default () => {
  return (
    <section className="docs-section--typography">
      <Text variant="display">display text</Text>
      <Text>span text</Text>
      <Text mark>mark text</Text>
      <Text underline>underline text</Text>
      <Text delete>delete text</Text>
      <Text strong>strong text</Text>
      <Text code>code text</Text>
      <Text keyboard>keyboard text</Text>
      <Text italic>italic text</Text>
      <Text variant="subtitle">subtitle text</Text>
      <Text variant="caption">caption text</Text>
    </section>
  );
};
```

## Paragraph

```tsx
import React from 'react';
import { Paragraph } from '@casts/typography';
import '@casts/typography/dist/cjs/index.css';

const content =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default () => {
  return <Paragraph>{content}</Paragraph>;
};
```
