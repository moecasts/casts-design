import { ComponentType } from 'react';

/**
 * assert that a component is of a certain type
 */
export const isComponentOfType = (
  element: ComponentType<any>,
  type: ComponentType<any>,
) => {
  const displayName = element.displayName;
  const targetDisplayName = type.displayName;

  if (displayName && targetDisplayName) {
    return displayName === targetDisplayName;
  }

  return element === type;
};
