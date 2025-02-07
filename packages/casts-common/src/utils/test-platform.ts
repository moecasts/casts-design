export const testPlatform = (re: RegExp) => {
  return typeof window !== 'undefined' && window.navigator != null
    ? re.test(
        // @ts-ignore This is an experimental technology
        window.navigator['userAgentData']?.platform ||
          window.navigator.platform,
      )
    : false;
};
