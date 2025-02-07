import { prefixCls } from './constants';

export const getCompletePrefixCls = ({
  prefixCls,
  suffixCls,
}: {
  prefixCls?: string;
  suffixCls?: string;
}) => [prefixCls, suffixCls].filter((text) => !!text).join('-');

export const getPrefixCls = (suffixCls?: string) =>
  getCompletePrefixCls({ prefixCls, suffixCls });
