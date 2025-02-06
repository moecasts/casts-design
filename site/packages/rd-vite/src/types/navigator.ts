export type Navigator = {
  title: string;
  order?: number;
  path: string;
};

export type Navigators = Record<string, Navigator[]>;
