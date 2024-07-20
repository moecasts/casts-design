export type Locales = [string, string][];

export type LocaleCode = string;

export type LocaleCodes = LocaleCode[];

export const locales: Locales = [
  ['en-US', 'English'],
  ['zh-CN', '中文'],
];

export const localeCodes: LocaleCodes = locales.map((i) => i[0]);

export const fallbackLocaleCode = localeCodes[0];
