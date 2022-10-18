import { Command } from 'commander';
import fg from 'fast-glob';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

const descriptions = {
  icons: {
    'zh-CN': '图标是视觉元素，用于提供直观的符号表示。',
    'en-US':
      'Icons are visual elements that provide intuitive symbolic representation.',
  },
  typography: {
    'zh-CN': '排版是关于文字和字体的艺术和技巧。',
    'en-US': 'Typography is art and technique of arranging text and fonts.',
  },
  space: {
    'zh-CN':
      '空间通常用于创建和管理页面元素之间的间距，以提供良好的视觉层次感和美观的布局。',
    'en-US':
      'Space is commonly used to create and manage the spacing between page elements, providing a good sense of visual hierarchy and an aesthetically pleasing layout.',
  },
  divider: {
    'zh-CN':
      '分隔线是一种界面元素，用于视觉上区分内容或信息，提高内容的可读性和组织性。',
    'en-US':
      'A Divider is an interface element used to visually distinguish content or information, enhancing the readability and organization of the content.',
  },
  button: {
    'zh-CN': '按钮是用户界面中的基本交互元素，用于触发操作或事件。',
    'en-US':
      'Buttons are fundamental interactive elements in user interfaces, used to trigger actions or events.',
  },
  toast: {
    'zh-CN':
      '轻提示是一种浮动消息，通常用于在页面的顶部或中部显示简短的通知信息。',
    'en-US':
      'Toast is a floating message component, typically used to display brief notification messages at the top or center of a page.',
  },
  message: {
    'zh-CN':
      '消息用于在页面中显示临时的信息提示，通常用于反馈用户的操作结果或显示系统消息。',
    'en-US':
      'Message is used to display temporary message prompts on a page, often used to provide feedback on user actions or display system messages.',
  },
  notification: {
    'zh-CN':
      '通知用于在页面的角落或其他位置显示重要信息，通常具有更高的优先级。',
    'en-US':
      'Notification is used to display important information in the corners of a page or other locations, usually with a higher priority.',
  },
  alert: {
    'zh-CN': '警告用于显示警告信息，通常用于提示用户注意或需要用户确认的操作。',
    'en-US':
      'Alert is used to display warning messages, typically to draw user attention or to prompt user confirmation for actions.',
  },
  progress: {
    'zh-CN': '进度用于展示任务的进度状态，例如加载进度、步骤进度条等。',
    'en-US':
      'Progress is used to display the progress status of tasks, such as loading progress or step progress bars.',
  },
  popup: {
    'zh-CN':
      '弹出是一种用于创建弹出窗口或模态对话框的通用，它可以包含多种形式的内容。',
    'en-US':
      'Popup component is a general-purpose used to create pop-up windows or modal dialogs, which can contain various forms of content.',
  },
  tooltip: {
    'zh-CN':
      '工具提示是一种用户界面，用于在用户悬停或聚焦于某个元素时显示额外的信息或提示。',
    'en-US':
      'Tooltips are user interface components that display additional information or hints when a user hovers over or focuses on an element.',
  },
  portal: {
    'zh-CN':
      '门户用于将子节点渲染到存在于父之外的DOM节点，通常用于创建模态对话框、提示框等。',
    'en-US':
      'Portal component is used to render child nodes to a DOM node that exists outside the parent, commonly used for creating modal dialogs, prompt boxes, etc.',
  },
  dialog: {
    'zh-CN':
      '对话框是一种模态窗口，用于与用户进行交互，通常包含标题、内容和操作按钮。',
    'en-US':
      'Dialog is a modal window used for interaction with the user, typically including a title, content, and action buttons.',
  },
  affix: {
    'zh-CN': '固钉用于固定页面中的元素，使其在滚动时保持在视口的特定位置。',
    'en-US':
      'Affix is used to fix elements on a page, keeping them in a specific position within the viewport as the page is scrolled.',
  },
  anchor: {
    'zh-CN':
      '锚点用于页面内的跳转链接，通常与内容的标题或目录结合使用，提供快速导航。',
    'en-US':
      'Anchor is used for in-page jump links, often combined with content headings or tables of contents to provide quick navigation.',
  },
  avatar: {
    'zh-CN': '头像用于展示用户或其他实体的图像标识。',
    'en-US':
      'Avatar is used to display image identifiers for users or other entities.',
  },
  badge: {
    'zh-CN':
      '徽章是一种用于显示计数、状态或提示的小型视觉元素，通常与其他结合使用。',
    'en-US':
      'Badge is a small visual element used to display counts, status, or notifications, often used in conjunction with other components.',
  },
  checkbox: {
    'zh-CN': '复选框是一种表单元素，允许用户选择多个选项。',
    'en-US':
      'Checkboxes are form elements that allow users to select multiple options.',
  },
  code: {
    'zh-CN': '代码用于在界面中展示代码片段或标记语言的文本。',
    'en-US':
      'Code is used to display code snippets or text in a markup language within an interface.',
  },
  input: {
    'zh-CN': '输入框是一种基本的表单元素，用于接收用户输入的文本内容。',
    'en-US':
      'Input is a basic form element used to receive text input from the user.',
  },
  radio: {
    'zh-CN': '单选按钮是一种表单元素，允许用户从一组选项中选择一个。',
    'en-US':
      'Radio buttons are form elements that allow users to select one option from a group.',
  },
  form: {
    'zh-CN': '表单用于收集和处理用户输入的数据。',
    'en-US': 'Form is used to collect and process user-entered data.',
  },
  grid: {
    'zh-CN': '网格系统是一种布局工具，通过列和行的组合来创建响应式的页面布局。',
    'en-US':
      'The Grid system is a layout tool that creates responsive page layouts through a combination of columns and rows.',
  },
  layout: {
    'zh-CN':
      '布局用于创建页面的整体结构，通常包括头部、侧边栏、主内容区和脚部。',
    'en-US':
      'Layout is used to create the overall structure of a page, typically including a header, sidebar, main content area, and footer.',
  },
  menu: {
    'zh-CN': '菜单用于创建导航栏或下拉菜单，提供用户操作的选项列表。',
    'en-US':
      'Menu is used to create navigation bars or drop-down menus, providing a list of options for user operations.',
  },
  table: {
    'zh-CN': '表格用于展示行列数据，支持排序、筛选、分页等交互功能。',
    'en-US':
      'Table is used to display grid data, supporting interactive features such as sorting, filtering, and pagination.',
  },
  tabs: {
    'zh-CN':
      '标签页用于在页面中创建多个标签页，用户可以切换查看不同的内容区域。',
    'en-US':
      'Tabs is used to create multiple tabs on a page, allowing users to switch and view different content areas.',
  },
  drawer: {
    'zh-CN': '抽屉是一种侧边弹出的界面元素，通常用于显示额外的内容或工具。',
    'en-US':
      'Drawer is a side-panel interface element, typically used to display additional content or tools.',
  },
  'input-number': {
    'zh-CN': '数字输入框是一种表单元素，用于接收用户输入的数字。',
    'en-US':
      'InputNumber is a form element used to receive numeric input from the user.',
  },
  link: {
    'zh-CN': '链接用于创建页面内的跳转链接或导航到外部资源的超链接。',
    'en-US':
      'Link is used to create in-page jump links or hyperlinks to navigate to external resources.',
  },
  pagination: {
    'zh-CN': '分页用于在长列表或数据集中提供分页导航。',
    'en-US':
      'Pagination is used to provide page navigation in long lists or data sets.',
  },
  select: {
    'zh-CN': '选择框用于从下拉列表中选择一个或多个选项。',
    'en-US':
      'Select is used to choose one or more options from a drop-down list.',
  },
  switch: {
    'zh-CN': '开关是一种表单元素，用于表示开/关或真/假的状态。',
    'en-US':
      'Switch is a form element used to represent an on/off or true/false state.',
  },
  tag: {
    'zh-CN': '标签用于表示分类、状态或额外的信息标记。',
    'en-US':
      'Tag is used to represent categories, status, or additional information markers.',
  },
};

const addInstallCodeToDoc = async (payload: {
  pkgDir: string;
  pkgName: string;
}) => {
  const { pkgDir, pkgName } = payload;

  const docs = (await fg(`${pkgDir}/docs/**/*.md`)).reduce(
    (acc, current) => {
      const locale = current.split('.').slice(-2)[0];
      return {
        ...acc,
        [locale]: current,
      };
    },
    {} as Record<string, string>,
  );

  Object.entries(docs).forEach(([locale, docPath]) => {
    const content = readFileSync(docPath, {
      encoding: 'utf8',
      flag: 'r',
    });

    const componentName = pkgDir.match(/packages\/casts-(.+)/)?.[1];

    if (!componentName) {
      return;
    }

    const description = descriptions?.[componentName]?.[locale];

    if (!description) {
      return;
    }

    console.log(`${pkgName} - ${componentName} - ${locale} - ${description}`);

    const newContent = content.replace(
      /\n---/gm,
      `\ndescription: ${description}\n---`,
    );
    if (content !== newContent) {
      writeFileSync(docPath, newContent);
    } else {
      console.log(`${docPath}`);
    }
  });
};

const run = async () => {
  const program = new Command();
  program.option('-p, --path <path>', 'use glob to match');

  program.parse();
  const opts = program.opts();
  const globPath = path.isAbsolute(opts.path)
    ? opts.path
    : path.join(process.cwd(), opts.path);

  const paths = await fg(globPath, { onlyDirectories: true });

  paths.forEach((dir) => {
    // paths.slice(1, 2).forEach((dir) => {
    const filePath = path.join(dir, 'package.json');

    const pkg = JSON.parse(
      readFileSync(filePath, {
        encoding: 'utf8',
        flag: 'r',
      }),
    );

    const pkgName = pkg.name;

    addInstallCodeToDoc({
      pkgDir: dir,
      pkgName,
    });
  });
};

run();
