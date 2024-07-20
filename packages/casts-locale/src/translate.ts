export interface Placement {
  [propName: string]: string | number;
}

export type TranslatePattern =
  | string
  | ((payload: Placement | undefined) => string)
  | Array<string>;

/**
 * translate the text
 * @param pattern text should be translated, eg: the value is {count}
 * @param placement props, eg: { count: 1 }
 * @returns {string} translated text
 */
export const translate = (
  pattern: TranslatePattern,
  placement?: Placement,
): string | Array<string> => {
  const REGEXP = /\{\s*([\w-]+)\s*\}/g;
  if (typeof pattern === 'string') {
    if (!placement || !REGEXP.test(pattern)) {
      return pattern;
    }
    const translated = pattern.replace(REGEXP, (_, key) => {
      if (placement) {
        return String(placement[key]);
      }
      return '';
    });
    return translated;
  }
  if (Array.isArray(pattern)) {
    return pattern.map((p, index) => {
      const translated = p.replace(REGEXP, (_: string, key: string) => {
        if (placement) {
          // @ts-ignore
          return String(placement[index][key]);
        }
        return '';
      });
      return translated;
    });
  }
  if (typeof pattern === 'function') {
    return pattern(placement);
  }
  return '';
};
