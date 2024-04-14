export const testUserAgent = (re: RegExp) => {
  if (typeof window === 'undefined' || window.navigator == null) {
    return false;
  }
  return (
    // @ts-ignore This is an experimental technology
    window.navigator['userAgentData']?.brands.some(
      (brand: { brand: string; version: string }) => re.test(brand.brand),
    ) || re.test(window.navigator.userAgent)
  );
};
