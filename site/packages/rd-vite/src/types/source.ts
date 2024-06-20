export type SourceMeta = {
  [key: string]: string | number | Record<string, any>;
} & {
  title?: string;
  description?: string;
  absPath?: string;
  nav?: Record<string, any>;
  group?: Record<string, any>;
  layout?: 'page' | 'componentDoc';
  hero?: Record<string, any>;
  features?: Array<Record<string, any>>;
};

export type SourceData = {
  standaloneCodeBlocks?: {
    [key: string]: string;
  };
};

export type Source = {
  id: string;
  path: string;
  meta?: SourceMeta;
  data: SourceData;
};
