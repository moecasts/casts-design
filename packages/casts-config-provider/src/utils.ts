export const getCompletePrefixCls = ({
  prefixCls,
  suffixCls,
}: {
  prefixCls?: string;
  suffixCls?: string;
}) => [prefixCls, suffixCls].filter((text) => !!text).join('-');
