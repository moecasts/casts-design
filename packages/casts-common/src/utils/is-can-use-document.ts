/** detect is can use dom */
export const isCanUseDocument = () =>
  !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
