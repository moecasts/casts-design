import { noop, useControlled } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { translate } from '@casts/locale';

import { defaultPageSizes, defaultPaginationProps } from '../default-props';

export type UsePageSizeProps = {
  pageSizes?: number[];
  defaultPageSizes?: number[];
  pageSize?: number;
  defaultPageSize?: number;
  onChange?: (pageSize: number) => void;
};

export const usePageSize = (props: UsePageSizeProps) => {
  const { pageSizes = defaultPageSizes, onChange = noop } = props;

  const [pageSize, setPageSize] = useControlled(
    props,
    'pageSize',
    onChange,
    defaultPaginationProps.defaultPageSize,
  );

  const { getPrefixCls, locale } = useConfig();

  const prefixCls = getPrefixCls('pagination-page-size-select');

  const classes = prefixCls;

  const pageSizeOptions = pageSizes.map((pageSize) => ({
    // label: `${pageSize} / page`,
    label: translate(locale.pagination.perPage, { pageSize }),
    value: pageSize,
  }));

  const handlePageSizeChange = (value: number) => {
    setPageSize(value);
  };

  return {
    classes,
    pageSizeOptions,
    pageSize,
    handlePageSizeChange,
  };
};
