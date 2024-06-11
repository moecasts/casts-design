import { Aside } from './aside';
import { Content } from './content';
import { Footer } from './footer';
import { Header } from './header';
import { Layout as _Layout } from './layout';

export const Layout = Object.assign(_Layout, {
  Header,
  Content,
  Footer,
  Aside,
});

export * from './hooks';
export * from './types';
