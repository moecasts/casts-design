import { escapeRegExp } from 'lodash-es';

/**
 * Get all occurrences of a substring in a string
 */
export const getAllOccurrences = (
  text: string,
  searchString: string | RegExp,
) => {
  const regex =
    searchString instanceof RegExp
      ? searchString
      : new RegExp(escapeRegExp(searchString), 'gi');

  let match;
  const positions = [];

  while ((match = regex.exec(text)) !== null) {
    positions.push(match.index);
  }

  return positions;
};
