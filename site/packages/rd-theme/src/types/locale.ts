type BasicLocale = { id: string; name: string };

export type Locale =
  | (BasicLocale & { base: string })
  | (BasicLocale & { suffix: string });

export type LocalesConfig = Locale[];
