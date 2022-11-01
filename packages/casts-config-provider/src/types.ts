export type Theme = {
  brandColor?: string;
  infoColor?: string;
  successColor?: string;
  processingColor?: string;
  errorColor?: string;
  warningColor?: string;
};

export type GetPrefixCls = (
  suffixCls?: string,
  customizePrefixCls?: string,
) => string;
