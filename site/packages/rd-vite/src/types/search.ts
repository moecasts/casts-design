import { TocItem } from './toc';

export type SearchItem = {
  id: string;
  title: string;
  content: string;
  route: string;
  localeCode?: string;
  toc?: TocItem[];
};
