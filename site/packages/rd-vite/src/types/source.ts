export type SourceMeta = {
  [key: string]: string | number | Record<string, any>;
} & {
  absPath?: string;
  nav?: Record<string, any>;
  group?: Record<string, any>;
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
