import { Aside } from './components/aside';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Layout } from './components/layout';

export * from './components/types';
export * from './components/hooks';

type LayoutWithStaticComponent = typeof Layout & {
  Header: typeof Header;
  Content: typeof Content;
  Footer: typeof Footer;
  Aside: typeof Aside;
};

(Layout as LayoutWithStaticComponent).Header = Header;
(Layout as LayoutWithStaticComponent).Content = Content;
(Layout as LayoutWithStaticComponent).Footer = Footer;
(Layout as LayoutWithStaticComponent).Aside = Aside;

export { Layout };
