import { useContext } from 'react';

import { BreadcrumbsContext } from '../breadcrumbs-context';

export const useBreadcrumbsContext = () => useContext(BreadcrumbsContext);
