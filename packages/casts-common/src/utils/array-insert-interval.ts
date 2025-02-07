import { isFunction } from './is-function';

export const arrayInsertInterval = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  arr: any[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  element: any,
  interval = 0,
) => {
  const newArr = [...arr];
  if (interval <= 0) {
    return newArr;
  }

  for (let i = interval; i < newArr.length; i += interval + 1) {
    if (isFunction(element)) {
      newArr.splice(i, 0, element(i));
    } else {
      newArr.splice(i, 0, element);
    }
  }
  return newArr;
};
